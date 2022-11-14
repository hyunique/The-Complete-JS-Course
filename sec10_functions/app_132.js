/* 132. Functions returning functions */

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}
const greeterHey = greet('Het')
greeterHey('Jonas');
greet('Hello')('Jonas')


// same function but in arrow 
// Remember arrow functions automatically return value.
const greet2 = greeting => name => console.log(`${greeting} ${name}`)
greet('Hello')('Jonas')