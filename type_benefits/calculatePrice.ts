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



