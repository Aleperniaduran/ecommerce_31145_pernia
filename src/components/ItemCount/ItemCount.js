import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ initial = 1, stock = 0, onAdd }) => {

    const [count, setCount] = useState(initial);
    
    const decrease = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increase = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    if (stock !== 0) {
        return(
            <div className='ItemCount-container'>
                <div>
                    <div className='ItemCount-controls'>
                        <button onClick={decrease}>-</button>
                        <p>{count}</p>
                        <button onClick={increase}>+</button>
                    </div>
                </div>
    
                <button onClick={() => onAdd(count)} className="add-to-cart-btn">Agregar al carrito</button>
            </div>
        )
    } else {
        return(
                <div className='ItemCount-container'>
                <div>
                    <div className='ItemCount-controls'>
                        <button onClick={decrease}>-</button>
                        <p>{0}</p>
                        <button onClick={increase}>+</button>
                    </div>
                </div>
                <p className='no-stock'>No hay stock</p>
    
                <button className="add-to-cart-btn">Agregar al carrito</button>
            </div>
        );
    }    
}

export default ItemCount