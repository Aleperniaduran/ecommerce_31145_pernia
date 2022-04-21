import './ItemDetail.css';
import { useContext } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import CartContext from '../../Context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        const productObj = {
            id, name,price, quantity: count
        }

        addItem(productObj)
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

                    {isInCart(id) ? <Link to='/cart' className="">Ir al carrito</Link> : <ItemCount initial={0} stock={stock} onAdd={handleAdd} /> }
                </div>
            </section>
        </article>
    )
}

export default ItemDetail