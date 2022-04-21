import './CartWidget.css'
import Image from './CartWidget.svg'
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div className="CartWidgetContainer">
            <img src={Image} alt='Cart icon' />
            <p>{ getQuantity() }</p>
        </div>
    )
}

export default CartWidget