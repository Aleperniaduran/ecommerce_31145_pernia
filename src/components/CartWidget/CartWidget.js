import './CartWidget.css'
import Image from './CartWidget.svg'
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div className="CartWidgetContainer">
            <Link to='/cart' className="CartWidgetLink">
                <img src={Image} alt='Cart icon' />
                <p>{ getQuantity() }</p>
            </Link>
        </div>
    )
}

export default CartWidget