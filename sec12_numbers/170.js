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