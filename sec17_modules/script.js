// Importing module
console.log('Importing module')
// import { addToCart, totalPrice as price, totalQuantity } from './cart.js';
// addToCart('bread', 6)
// console.log(price, totalQuantity)

import * as ShoppingCart from './cart.js' // importing everything from one module file
ShoppingCart.addToCart('bread', 10)

//---------------------------------------------------//
//273. Top-level await
// from ES2022, await keyword can be used without async, in module files (not in script)
// Doing so will block entire code execution.

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data)

    return{title: data.at(-1).title, text:data.at(-1).body}
}

const lastPost = getLastPost();
console.log(lastPost) // logs Promise{<pending>}

const lastPost2 = await getLastPost(); //=lastPost.then(last=>console.log(last))
console.log(lastPost2); // logs data after it has been loaded


//---------------------------------------------------//
//274. The module pattern

/* main goal of module pattern = to encapsulate functionality to have private data
    Best way to acheiving this is by using function.*/

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`)
    };

    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} ordered from supplier`)
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity, 
        
    }
})();

ShoppingCart2.addToCart('apple', 4);


import cloneDeep from './node_modules/lodash-es/cloneDeep'