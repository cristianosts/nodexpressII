export class Item {
    constructor(id: number, name: string, price: number, description: string){
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }

    id: number | undefined
    name: string | undefined
    price: number | undefined
    description: string | undefined
}
