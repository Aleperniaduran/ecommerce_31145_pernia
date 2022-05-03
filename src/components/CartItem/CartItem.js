import './CartItem.css'
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from 'react-router-dom'

const CartItem = () => {

  const { cart, removeItem } = useContext(CartContext)
  const initialValue = 0;
  const total = cart.reduce((accumulator,current) => accumulator + current.price * current.quantity, initialValue)

  if(cart.length === 0) {
        return (
          <div>

            <h1 className='no-products-mssg'>No hay productos</h1>
            <Link to='/list' className="back-to-list-link">
                Seguir Comprando
            </Link>

            </div>
        )
    }

    return (
      <div>
        <div className='cart-table-titles'>
          <p className='cart-element-title'>Nombre Prod</p>
          <p className='cart-element-title'>Cantidad</p>
          <p className='cart-element-title'>Precio Uni</p>
          <p className='cart-element-title'>Subtotal</p>
          <p className='last-item-title'></p>
        </div>
          {
            cart.map(prod => <div key={prod.id} className='cart-element'>
              <p className='cart-element-detail'>{prod.name}</p>
              <p className='cart-element-detail'>{prod.quantity}</p>
              <p className='cart-element-detail'>{prod.price}$</p>
              <p className='cart-element-detail'>{prod.quantity * prod.price}$</p>
              <button className='remove-item-button' onClick={() => removeItem(prod.id)}>X</button>
            </div>)
          }

          <p className='cart-total'>Total del carro: {total}</p>
      </div>
    );
  };
  
  export default CartItem;