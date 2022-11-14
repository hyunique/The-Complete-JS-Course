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
the 'book' is not method anymore, it is a separate functio.
so the 'this' keyword is now undefined.*/

//We use 'call' method to execute 'book' function, then 'this'keyword is set to eurowings.
book.call(eurowings, 23, 'Sara Wiliams')
console.log(eurowings);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// In modern Js, it is more common like below than with apply method
book.call(swiss, ...flightData)