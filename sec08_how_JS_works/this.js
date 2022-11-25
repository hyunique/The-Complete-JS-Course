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