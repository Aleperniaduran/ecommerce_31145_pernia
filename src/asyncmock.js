const products = [
    {
        id: '1',
        name: 'Producto 1',
        category: 'ProductoA',
        img: 'https://ssmfg.b-cdn.net/wp-content/uploads/2020/02/Screenshot_4.jpg',
        stock: 25,
        description: 'Esta es la descripcion del producto 1',
        price: 100,
    },
    {
        id: '2',
        name: 'Producto 2',
        category: 'ProductoB',
        img: 'https://us.123rf.com/450wm/laksamon/laksamon1611/laksamon161100051/66632845-tarro-abierto-de-los-productos-cosm%C3%A9ticos-de-crema-facial.jpg?ver=6',
        stock: 20,
        description: 'Esta es la descripcion del producto 2',
        price: 200,
    },
    {
        id: '3',
        name: 'Producto 3',
        category: 'ProductoC',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3ssJMziwj3m1ON9vgH2ULJqNK2eX2ipfJxEoQSvmtod-wL8stT1TwBV2_p854Z82x7I&usqp=CAU',
        stock: 230,
        description: 'Esta es la descripcion del producto 3',
        price: 300,
    },
    {
        id: '4',
        name: 'Producto 4',
        category: 'ProductoD',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh10BjaYW9YzBV_LqBt8KPiO13TIxNAPCkVrYBMWQhRAfoN_bRSL80G7y76eu7jJQbEhE&usqp=CAU',
        stock: 15,
        description: 'Esta es la descripcion del producto 4',
        price: 400,
    }
]

const categories = [
    {
        id: 'ProductoA',
        description: 'Producto A'
    },
    {
        id: 'ProductoB',
        description: 'Producto B'
    },
    {
        id: 'ProductoC',
        description: 'Producto C'
    },
    {
        id: 'ProductoD',
        description: 'Producto D'
    }
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout (() =>{
            resolve(categories)
        }, 500)
    })
}


export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
