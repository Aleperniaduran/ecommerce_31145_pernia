import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import CartContext from "../../Context/CartContext"
import { useContext } from "react"
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const { cart } = useContext(CartContext)

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])

    return(
        <nav className="Nav-bar">
            <NavLink to='/'>
                <img src= {'../images/clyan-logo.jpg'} className="Nav-bar-logo" alt="logo" />
            </NavLink>

            <div className='Categories'>
                <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }>Todos los productos</NavLink>

                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' }
                >{cat.description}</NavLink>)}
            </div>

            {cart.length > 0 ? <CartWidget /> : <div></div>}
        </nav>
    )
}

export default NavBar;