import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmock';

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
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

            <CartWidget />
        </nav>
    )
}

export default NavBar;