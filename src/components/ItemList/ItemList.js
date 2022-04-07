import Item from '../Item/Item'

const ItemList = ({products}) => {

    return(
        <ul className='Products-row'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default ItemList