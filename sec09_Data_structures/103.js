// 103. Destructuring arrays

'use strict';

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// Destructuring array : A line below is same as 4 lines above
// Original array is not changed.
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);




// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3},`)
  },


  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

/* Switching variables
const temp = main;
main = secondary;
secondary = main;
console.log(main, secondary) 
This can be written as below*/
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// When there is nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// This can be useful when using api ; when you don't know array's length
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r)

/////////////////////////////////////////////////
// 104. Destructuring objects

// To destructure objects, use exact name of the property. But the order does not matter.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// To specify new name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(hours);

// Setting default value
const { menu = [], starterMenu: starters = [] } = restaurant;

// Mutating variables
let f = 111;
let g = 777;
const obj = { f: 23, g: 56, h: 87 };
/* { f, g} = obj 
Here engine recognizes curly brace as a block.
You can't assign value to a block, so it throws error.
Simply add parans around it to avoid that error.*/ 
({ f, g } = obj);
console.log(f, g);


// Nested objects
const { fri: { open: o, close: cl } } = openingHours;
console.log(o, cl);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})


///////////////////////////////////////////
/* 
105. The spread operator
 : to expand an array to individual elements
Can be used with all iterable data structure.
Iterables: arrays, strings, maps, sets. Not objects
Can be useful when we need to pass in multiple elements into a function
Spread operator takes all the elements in the array. It does not create new variable.
In consequence, we can only use it when otherwise we would separate them with commas.
*/

const arrays = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arrays];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join two or more arrays
const wholeMenu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(wholeMenu);

//Iterables
const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// This throws an error.
// Spread operator is expected only when we pass in to function or when we build new arrays.
// console.log(`${...str} Schedtmann`);

// Passing into function real-world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?")
];
console.log(...ingredients);
restaurant.orderPasta(...ingredients);



///////////////////////////////////////////
/* 106. Rest pattern and parameters
 : Opposite of spread. 
   to collect multiple elements and compress them into array
 Rest element must be the last element of array.

 */
// Rest pattern, becuase on let side of =
const [m, n, ...others] = [1, 2, 3, 4, 5];
console.log(m, n, others);

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);


//////////////////////////////////////////
/* 114.Looping objects: Object keys, values, entries*/

// Property NAMES(Key)
const properties = Object.keys(openingHours);
console.log(properties);

let openStr =`We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr+= `${day}, `
}
console.log(openStr)


// Property VALUES
const values = Object.values(openingHours);
console.log(values);


// Property ENTRIES (=names+values =entire object)
const entries = Object.entries(openingHours);
console.log(entries);

    // Destructuring + looping object
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}