export class Earring {

    date: Date
    id: number
    material: string
    warranty: string
    price: number

    constructor(date?: Date, id?: number, material?: string, warranty?: string, price?: number) {
        this.date = date
        this.id = id
        this.material = material
        this.warranty = warranty
        this.price = price
    }
}