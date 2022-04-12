import './ItemDetail.css'

const ItemDetail = ({ name, img, category, description, price, stock }) => {
    return (
        <article className="Product-Details-Page">
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <div className='prod-info-container'>
                    <h2 className='prod-info'>{name}</h2>
                    <p className="prod-info">
                        <b>Categoria:</b> {category}
                    </p>
                    <p className="prod-info">
                        <b>Descripción:</b> {description}
                    </p>
                    <p className="prod-info">
                        <b>Precio:</b> ${price}
                    </p>

                    <p className="prod-info">
                        <b>Cant. Disponible:</b> {stock}
                    </p>
                </div>
            </section>
        </article>
    )
}

export default ItemDetail