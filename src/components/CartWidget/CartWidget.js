import './CartWidget.css'
import Image from './CartWidget.svg'

const CartWidget = () => {
    return(
        <div className="CartWidgetContainer">
            <img src={Image} alt='Cart icon' />
            <p>0</p>
        </div>
    )
}

export default CartWidget