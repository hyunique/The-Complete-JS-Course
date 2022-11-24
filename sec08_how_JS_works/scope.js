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