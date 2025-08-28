import { Item } from "../model/items.model"

const items: Item[] = [
    {
        id: 1,
        name: 'Item A',
        price: 40.0,
        description: 'Description for Product A'
    },
    {
        id: 2,
        name: 'Item B',
        price: 50.0,
        description: 'Description for Product B'
    },
    {
        id: 3,
        name: 'Item C',
        price: 30.0,
        description: 'Description for Product C'
    },
    {
        id: 4,
        name: 'Item D',
        price: 20.0,
        description: 'Description for Product D'
    },
    {
        id: 5,
        name: 'Item E',
        price: 60.0,
        description: 'Description for Product E'
    },
    
]

export const get = () => {
    return items
}

export const getById = (id: number) : Item | undefined => {
    return items.find(i => i.id === id)
}

export default { get, getById }