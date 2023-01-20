// Exporting module
console.log('Exporting module')

const shippingCost = 10;
const cart = [];


// Named export : must be top-level code. e.g. wouldn't work in if block
export const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`)
}

const totalPrice = 237;
const totalQuantity = 23;
export {totalPrice, totalQuantity}