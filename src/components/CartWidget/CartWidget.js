import './CartWidget.css'
import Image from './CartWidget.svg'

const CartWidget = () => {
    return(
        <div class="CartWidgetContainer">
            <img src={Image}/>
            <p>4</p>
        </div>
    )
}

export default CartWidget