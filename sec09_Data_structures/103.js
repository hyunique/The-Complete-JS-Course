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
