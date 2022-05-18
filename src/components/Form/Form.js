import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import "./Form.css";

import {
  getDocs,
  writeBatch,
  query,
  where,
  collection,
  documentId,
  addDoc,
} from "firebase/firestore";

import { firestoreDb } from "../../services/firebase/index";

const Form = () => {
  const { cart } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const [order, setOrder] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const initialValue = 0;

  const total = cart.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );

  if (loading) {
    return <div className=""></div>;
  }

  const objOrder = {
    items: cart,
    buyer: {
      name: name,
      phone: phone,
      email: email,
    },
    total: total,
    date: new Date(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const ids = cart.map((prod) => prod.id);

    const batch = writeBatch(firestoreDb);

    const collectionRef = collection(firestoreDb, "products");

    const outOfStock = [];

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prodQuantity = cart.find(
            (prod) => prod.id === doc.id
          )?.quantity;
          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(firestoreDb, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({
            name: "outOfStockError",
            products: outOfStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();
        setOrder(id);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setSuccess(true);
      });
  };

  return (
    <>
      <button className="boton-orden" type="button" onClick={() => setShowModal(true)}>
        Realizar la Orden
      </button>
      {showModal ? (
        <>
          <div className="">
            {success ? (
              <>
                <div className="order-confirmation-modal">
                  <div className="order-confirmation-container">
                    <div className="order-confirmation-header">
                      <h3 className="modal-title">Orden creada correctamente</h3>
                      <button className="cerrar-modal" type="button"
                      onClick={() => {
                        clearCart();
                        setShowModal(false);
                      }}>X</button>

                    </div>                  
                  <p className="">Gracias por tu compra, {objOrder.buyer.name}!</p>
                  <p className="">Tu numero de orden es: {order}</p>

                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="form-modal">
                  <div className="modal-container">
                    <div className="modal-header">
                      <h3 className="modal-title">Completa el formulario</h3>
                      <button className="cerrar-modal" type="button" onClick={() => setShowModal(false)}>x</button>
                    </div>

                      
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Nombre"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <input
                        type="number"
                        placeholder="Numero de Telefono"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className="boton-enviar-orden">
                        Enviar Orden
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=""></div>
        </>
      ) : null}
    </>
  );
};

export default Form;
