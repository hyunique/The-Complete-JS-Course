/* 96. 'this' keyword
'this' is special variable that is created for every execution context. (therefore every function)
It is not static, the value depends how the fuction is called.
And its value is only assigned when the function is actually called.

method.this = object that is calling method
normal function.this = in strict mode = undefined, otherwise = window object
arrow function.this = of surrounding function (lexical this)
eventlistener.this = DOM element that the handler is attached to*/
'use strict';


console.log(this); //returns global window object

// 'this' in normal function
const calcAge = function (birthyear) {
    console.log(2037 - birthyear)
    console.log(this); //returns undefined
}
calcAge(1992);

// 'this' in arrow function
const calcAgeArr = birthyear => {
    console.log(2037 - birthyear)
    console.log(this); //returns global window object (lexical scope)
}
calcAgeArr(1982);

// 'this' in method
const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this) //returns jonas object
        console.log(2037 - this.year);
    }
}
jonas.calcAge()

const matilda = {
    year: 2017,
}
matilda.calcAge = jonas.calcAge //method borrowing: copied a method of jonas to matilda
matilda.calcAge() //console logs matilda object

const f = jonas.calcAge;
f(); //console logs undefined (normal function)



////////////////////////////////////////
// 98. Regular Functions vs Arrow Functions

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
      // console.log(this);
        console.log(2037 - this.year);
        
      // Solution 1
        const self = this; // self or that 
        //normal functions are undefined with this keyword. 
      const isMillenial = function () {
        console.log(self);
        console.log(self.year >= 1981 && self.year <= 1996);
        };
        
      // Solution 2
      const isMillenial = () => {
        console.log(this); // Arrow f uses lexical scope. this returns jonas object
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },
    greet: () => {
      console.log(this);
      console.log(`Hey ${this.firstName}`);
    },
  };
  jonas.greet();
  jonas.calcAge();
  // arguments keyword
  const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 12);
  var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
  };
  addArrow(2, 5, 8);