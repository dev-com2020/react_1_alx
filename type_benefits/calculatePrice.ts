function calculateTotalPrice(
    product : {name: string, unitPrice: number}, 
    quantity: number, 
    discount: number
    ) : number {
    const priceWithoutDiscount = product.unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}

let total: number = calculateTotalPrice({name: "test", unitPrice: 1}, 1, 0.1);

let flag = false

let table = {name: "Table", unitPrice: 450}
table.name = "Tomek"

const tabela : {name: string, unitPrice?: number} = {
    name: "Table",
}

type Sprzedaz = (quantity: number) => void
type Product = {name: string, unitPrice?:number, purchase?: Sprzedaz}

interface Product2 {
    name: string,
    unitPrice?: number
}

class Product3 {
    name = ""
    unitPrice = 0
}

interface DiscountProduct2 extends Product2 {
    rabat: number
}

interface Sprzedaz2 {(quantity: number): void}

let chair: Product = {name: "Chair", purchase: (quantity) =>
    console.log(`Zakupiono ${quantity} krzeseł`)
}



type DiscountProduct = Product & { rabat: number}

let chairOnSale: DiscountProduct = {name: "Krzesło", unitPrice: 30,rabat: 5}


enum Level {
    Low,
    Medium,
    High
}

let level = Level.Low
console.log(level)