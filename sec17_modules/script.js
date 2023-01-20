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
console.log(lastPost2) // logs data after it has been loaded