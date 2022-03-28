import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="Nav-bar">
            <img src= {'./images/clyan-logo.jpg'} className="Nav-bar-logo" alt="logo" />
            <button className = "inicio-button">Inicio</button>
            <ul className= "Main-nav">
                <li>Vehiculos</li>
                <li>Electronica</li>
                <li>Libros</li>
            </ul>
            <button className= "login-button">Login</button>
        </nav>
    )
}

export default NavBar;