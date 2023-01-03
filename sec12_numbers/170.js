/* ------------------------------------------------ */
/* 170. Converting and Checking Numbers */

////// Conversion
console.log(Number('23')); //Convert string to number
console.log(+'23'); // Same as above, different method

////// Parsing
console.log(Number.parseInt('30px', 10)) // logs 30
// Below logs NaN. can't convert when starting with string
console.log(Number.parseInt('e23', 10)) 

console.log(Number.parseInt('2.5rem')); // logs 2
console.log(Number.parseFloat('2.5rem')); // logs 2.5


////// Checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20')); //false
console.log(Number.isFinite(23 / 0)); //false (=infinity)



/* ------------------------------------------------ */
/* 171. Math and Rounding */

// square root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// cubic root
console.log(8 ** (1 / 3)); // 2

// get the biggest num
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // Nan

// get the smallest num
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// Generate random number
console.log(Math.trunc(Math.random() * 6) + 1);

// Generate random number in the range
const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;
  // 0...1 -> 0...(max-min) -> min...(max-min)+min -> min...max

// Rounding intergers
console.log(Math.trunc(23.3)) // 23 cut off decimal part
console.log(Math.floor(23.3)) // 23
console.log(Math.floor('23.3')) // 23

console.log(Math.trunc(-23.3)) // 23 
console.log(Math.floor(-23.3)) // 24

console.log(Math.round(23.3)) // 23
console.log(Math.round(23.9)) // 24

console.log(Math.ceil(23.3)) // 24
console.log(Math.ceil(23.9)) // 24


// Rounding decimals
console.log((2.7).toFixed(0)) // '3' returns string
console.log((2.7).toFixed(3)) // '2.700'
console.log((2.345).toFixed(2)) // '2.35'
console.log(+(2.345).toFixed(2)) // 2.35


/* ------------------------------------------------ */
/* 172. The remainder operator */
//usage example
labelBalance.addEventListener('click', function () {
    [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
        if (i % 2 === 0) row.style.backgroundColor = 'skyblue'
        if (i % 3 === 0) row.style.backgroundColor = 'gray';
    })
})


/* ------------------------------------------------ */
/* 175. Creating Dates */
// 3 ways of creating dates


const now = new Date();
console.log(now); // logs date and time it was created(file was saved)

// by parsing string
// Try using this method only for JS created strings as third example, otherwise it is prone to create errors 
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movemnetsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // logs Thu Nov 19 2037 15:2305 GMT+0000

console.log(new Date(0)); // 0 milli seconds after first unix time

// Working with dates
// Dates created here are special type of object, so it has own methods
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 -> means november
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 -> 0 is sunday, 4 is thursday
//getHours, getMinutes, getSeconds works same

console.log(future.toISOString());

console.log(future.getTime()); // amount of seconds past unix time
console.log(Date.now());


/* ------------------------------------------------ */
/* 177. Operations with Dates */
// if you need precise dates, consider using free library like moment.js

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
//converts(miliseconds to seconds * to minutes * to hours * to days )
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
const days2 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 6));

console.log(days1, days2); // logs 10, 8


/* ------------------------------------------------ */
/* 180. Timers : setTimeout and setInterval */

// ---setTimeout---
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients);
console.log('Waiting...')
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
// logs -> 'Waiting... Here is your pizza with olives and'

// ---setInterval---
setInterval(function() {
    const now = new Date();
    console.log(now)
}, 1000);
// logs current time every second