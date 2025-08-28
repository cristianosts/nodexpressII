import { Product } from "../model/products.model";

const products: Product[] = [
    {
        id: 1,
        name: 'Product A',
        price: 40.0,
        description: 'Description for Product A'
    },
    {
        id: 2,
        name: 'Product B',
        price: 50.0,
        description: 'Description for Product B'
    },
    {
        id: 3,
        name: 'Product C',
        price: 30.0,
        description: 'Description for Product C'
    },
    {
        id: 4,
        name: 'Product D',
        price: 20.0,
        description: 'Description for Product D'
    },
    {
        id: 5,
        name: 'Product E',
        price: 60.0,
        description: 'Description for Product E'
    },
    
]

export const get = () => {
    return products
}

export const getById = (id: number) : Product | undefined => {
    return products.find(product => product.id === id)
}

export default { get, getById }