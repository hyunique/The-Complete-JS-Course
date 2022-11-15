/* 133. The call, apply and bind method */

const lufthansa = {
    airline: 'Lufthansa',
    code: 'LH',
    bookings: [],
    //book: function(){}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} 
        flight ${this.code}${flightNum}`)
        this.bookings.push({ flight: `${this.code}${flightNum}`, name })
    }
}

lufthansa.book(239, 'Elena Yi');
lufthansa.book(635, 'Chretien Attevelt');
console.log(lufthansa)

const eurowings = {
    airline: 'Eurowings',
    code: 'EW',
    bookings: [],
};

const book = lufthansa.book;
/*
Does NOT Work
  book(23, 'Sara Williams')
the 'book' is not method anymore, it is a separate function.
so the 'this' keyword is now undefined.*/

//We use 'call' method to execute 'book' function, then 'this'keyword is set to eurowings.
book.call(eurowings, 23, 'Sara Wiliams')
console.log(eurowings);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

// In modern Js, it is more common like below than with apply method
book.call(eurowings, ...flightData)





// Bind method
/* Bind method does not immediately call the function.
 Instead, it returns a new function where the 'this' keyword is bound.
 (means first arguement of bind is 'this' keyword)
 */
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
bookEW(23, 'Steven Williams')

// Like with call method, you can pass in multiple arguements.
// Below, flight number argument is already passed and set.
const bookEW23 = book.bind(eurowings, 23)
bookEW23('Jonas Schmedtmann')

//With Event listeners 
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this)
    this.planes++
    console.log(this.planes)
}

/* 'this' keyword in event listner is always attached to the object of event.
Hence you always need to manually define where 'this' keyword is bound in event listener.
To do that, use bind method and identify.*/
document.querySelector('.buy').addEventListener
    ('click', lufthansa.buyPlane.bind(lufthansa));


//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))
//Below is same as : addVAT = value => value + value * 0.23;
//There is no this keyword in the function. In that case null for first argument is a standard.
const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100))

// Same functionality as above but in function returning function
const addV = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}