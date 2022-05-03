import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        
        const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : query(collection(firestoreDb, 'products'), orderBy('name', 'asc'))
            //: collection(firestoreDb, 'products')
        
            getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })

    }, [categoryId])

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }

    return(
        <div>
            <h1 className="greeting-mssg">{props.greeting}</h1>

            <ItemList products={products}/>
        </div>        
    );
};

export default ItemListContainer