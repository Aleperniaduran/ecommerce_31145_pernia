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
    },
    {
        id: '5',
        name: 'Producto 5',
        category: 'ProductoA',
        img: 'https://i0.wp.com/velocitycommerce.co.uk/wp-content/uploads/2020/06/Unbranded.png?fit=990%2C556&ssl=1',
        stock: 15,
        description: 'Esta es la descripcion del producto 5',
        price: 800,
    },
    {
        id: '6',
        name: 'Producto 6',
        category: 'ProductoB',
        img: 'https://images.squarespace-cdn.com/content/v1/51d151b1e4b05d425c859fc9/1602648741990-RZVDR10FXJ48L626SJLO/rejuvenating-set?format=1000w',
        stock: 15,
        description: 'Esta es la descripcion del producto 6',
        price: 800,
    },
    {
        id: '7',
        name: 'Producto 7',
        category: 'ProductoC',
        img: 'https://wigmoretrading.com/wp-content/uploads/2021/11/beautypackaging-8a3d59f4c3a240c9b174de4d3cccae50.jpg',
        stock: 15,
        description: 'Esta es la descripcion del producto 7',
        price: 800,
    },
    {
        id: '8',
        name: 'Producto 8',
        category: 'ProductoD',
        img: 'https://liquidcreativity.com.au/wp-content/uploads/2016/02/muji_bath-1200x720.jpg',
        stock: 230,
        description: 'Esta es la descripcion del producto 8',
        price: 600,
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
