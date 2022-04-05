import './ItemListContainer.css'
import { useState } from "react";
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {

    const [show] = useState(true);
    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`);
    };

    return(
        <div>
            <h1 className="greeting-mssg">{props.greeting}</h1>

            <div>
                {show ? <ItemCount initial={5} stock={10} onAdd={handleOnAdd} /> : null}
            </div>
        </div>        
    );
};

export default ItemListContainer