function calculateTotalPriceJS(product, quantity, discount) {
    const priceWithoutDiscount = product * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}