const products = [
    {
        id: 1,
        name: 'Producto 1',
        category: 'Producto A',
        img: 'https://ssmfg.b-cdn.net/wp-content/uploads/2020/02/Screenshot_4.jpg',
        stock: 25,
        description: 'Esta es la descripcion del producto 1',
        price: 100,
    },
    {
        id: 2,
        name: 'Producto 2',
        category: 'Producto B',
        img: 'https://us.123rf.com/450wm/laksamon/laksamon1611/laksamon161100051/66632845-tarro-abierto-de-los-productos-cosm%C3%A9ticos-de-crema-facial.jpg?ver=6',
        stock: 20,
        description: 'Esta es la descripcion del producto 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Producto 3',
        category: 'Producto C',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3ssJMziwj3m1ON9vgH2ULJqNK2eX2ipfJxEoQSvmtod-wL8stT1TwBV2_p854Z82x7I&usqp=CAU',
        stock: 230,
        description: 'Esta es la descripcion del producto 3',
        price: 300,
    },
    {
        id: 4,
        name: 'Producto 4',
        category: 'Producto D',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh10BjaYW9YzBV_LqBt8KPiO13TIxNAPCkVrYBMWQhRAfoN_bRSL80G7y76eu7jJQbEhE&usqp=CAU',
        stock: 15,
        description: 'Esta es la descripcion del producto 4',
        price: 400,
    }
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}
