import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ setCart, cart }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {

    getDoc(doc(firestoreDb, 'products', productId)).then(response => {
      console.log(response)
      const product = { id: response.id, ...response.data()}
      setProduct(product)
    })

    return () => {
      setProduct();
    };
  }, [productId]);

  return (
    <div className="Product-Details-Page-Container">
          {loading ? (
            <h2 className="loading-message">Cargando...</h2>
          ) : product ? (
            <div>
              <h1>This is the PDP (Product Detail Page)</h1>
              <ItemDetail {...product} setCart={setCart} cart={cart} />
            </div>
          ) : (
            <h1 className="">
              El producto no existe
            </h1>
          )}
    </div>
  );
};

export default ItemDetailContainer;
