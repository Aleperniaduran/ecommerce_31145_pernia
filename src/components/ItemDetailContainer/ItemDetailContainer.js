import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProduct();
    };
  }, [productId]);

  return (
    <div className="Product-Details-Page-Container">
          {loading ? (
            <h2 className="">Cargando...</h2>
          ) : product ? (
            <div>
              <h1>This is the PDP (Product Detail Page)</h1>
              <ItemDetail {...product} />
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
