// Object property shorthand
const name = 'Tiara'
const userAge = 20

const user = {
    name,
    age: userAge,
    location: 'Toronto'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)