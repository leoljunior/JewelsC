export class Earring {

    date: string
    id: number
    material: string
    warranty: string
    price: number

    constructor(date?: string, id?: number, material?: string, warranty?: string, price?: number) {
        this.date = date
        this.id = id
        this.material = material
        this.warranty = warranty
        this.price = price
    }
}