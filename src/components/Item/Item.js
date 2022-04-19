import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({ id, name, img, description, stock}) => {
    return(
        <li className='product-card'>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <div className='product-info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <p className='stock'>{stock} unidades disponibles</p>
                <Link className='Ver-Detalle' to={`/detail/${id}`}>Ver detalle</Link>
            </div>
        </li>
    )
}

export default Item
