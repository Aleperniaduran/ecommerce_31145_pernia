import './ItemDetailContainer.css'
import { useEffect, useState } from 'react';
import{ getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductById(1).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        })

        return (() => {
            setProduct()
        })

    }, [])

    return(
        <div className='Product-Details-Page-Container'>
            <h1>This is the PDP (Product Detail Page)</h1>
            <ItemDetail {...product} />
        </div>        
    );
};

export default ItemDetailContainer