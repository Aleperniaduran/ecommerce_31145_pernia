import './Cart.css'
import CartItem from "../CartItem/CartItem"
import { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext';
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'

const Cart = () => {

  const [loading, setLoading] = useState(false)

  const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  



  const createOrder = () => {
      setLoading(true)

      const objOrder = {
          items: cart,
          buyer: {
              name: 'Alejandro Pernia',
              phone: '123456789',
              email: 'alejandropernia641@gmail.com'
          },
          total: getTotal(),
          date: new Date()
      }

      const ids = cart.map(prod => prod.id)

      const batch = writeBatch(firestoreDb)

      const collectionRef = collection(firestoreDb, 'products')

      const outOfStock = []

      getDocs(query(collectionRef, where(documentId(), 'in', ids)))
          .then(response => {
              response.docs.forEach(doc => {
                  const dataDoc = doc.data()
                  const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                  if(dataDoc.stock >= prodQuantity) {
                      batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                  } else {
                      outOfStock.push({ id: doc.id, ...dataDoc })
                  }
              })
          }).then(() => {
              if(outOfStock.length === 0) {
                  const collectionRef = collection(firestoreDb, 'orders')
                  return addDoc(collectionRef, objOrder)
              } else {
                  return Promise.reject({ name: 'outOfStockError', products: outOfStock})
              }
          }).then(({ id }) => {
              batch.commit()
              console.log(`El id de la orden es ${id}`)
          }).catch(error => {
              console.log(error)
          }).finally(() => {
              setLoading(false)
          })
  }

  if(loading) {
      return <h1>Se esta generando su orden</h1>
  }

    return (
      <div className='cart-main-container'>
        <h1 className='cart-header'>Cart</h1>
        < CartItem />
        <button onClick={() => clearCart()} className="clear-cart-button">Limpiar carrtio</button>
        <button onClick={() => createOrder()} className="Button">Generar Orden</button>
      </div>
    );
  };
  
  export default Cart;