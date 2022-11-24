'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you are a millenial, ${firstName}`
            console.log(str);
        }
        console.log(millenial)
    }
    printAge()
    return age;
}

const firstName = 'Elena';
calcAge(1992);

//----------------------------------
// 95. Hoisting and TDZ

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow); // This logs Undefined
console.log(addArrow(2, 3));
/* from above : Uncaught TypeError: addExpr is not a function
addExpr is a variable declared with var, hence it is undefined.
So line 28 and 30 is basically (undefined(2,3))
*/

function addDecl(a, b) {
    return a + b;
}

var addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;