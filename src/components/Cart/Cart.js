import './Cart.css'
import CartItem from "../CartItem/CartItem"

const Cart = () => {
  return (
      <>

      <div className='cart-main-container'>
        <h1 className='cart-header'>Cart</h1>
        <CartItem/>
      </div>
      
      </>
  );
};
export default Cart;