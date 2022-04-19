import './ItemDetail.css';
import { useState } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (quantity) => {
        if (quantity === 0) {
            console.log('Agrega al menos un producto')
        } else {
            console.log(`Se agregaron ${quantity} productos`);
            setQuantity(quantity)
        }
    }
    return (
        <article className="Product-Details-Page">
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <div className='prod-info-container'>
                    <h2 className='prod-info'>{name}</h2>
                    <p className="prod-info">
                        <b>Categoria:</b> {category}
                    </p>
                    <p className="prod-info">
                        <b>Descripción:</b> {description}
                    </p>
                    <p className="prod-info">
                        <b>Precio:</b> ${price}
                    </p>

                    <p className="prod-info">
                        <b>Cant. Disponible:</b> {stock}
                    </p>

                    {quantity > 0 ? <Link to='/cart' className="">Finalizar compra</Link> : <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} /> }
                </div>
            </section>
        </article>
    )
}

export default ItemDetail