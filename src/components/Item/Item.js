import './Item.css'

const Item = ({ name, img, description, stock}) => {
    return(
        <li className='product-card'>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <div className='product-info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <button>Ver detalle del producto</button>
                <p className='stock'>{stock} unidades disponibles</p>
            </div>
        </li>
    )
}

export default Item