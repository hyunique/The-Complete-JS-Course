// 121-123. Working wiht strings


//--------------------------------------------
const airline = 'KLM dutch royal';
const plane = 'A320';

// Like array, you can access individual elements in strings
console.log(plane[0]);
console.log('B315'[2]);
console.log(airline.length);


// Methods
console.log(airline.indexOf('d'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('dutch'));

// Cut out from the index and return as new string
console.log(airline.slice(4));
// Cut out from the index stop before second index
console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(' ')))

const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E')
        console.log('You got the middle seat 😂')
    else console.log('You got lucky! 😎')
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('2E');

/*Behind the scene, when we call method on string, 
JS engine converts primitive string into object by calling new String('').
And it uses methods from that object, convert the result back to string primitive data.*/


//--------------------------------------------
// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);


//--------------------------------------------
// Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = '    Hello@Janas.Io ';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // To remove empty space

const normalizedEmail = loginEmail.toLowerCase().trim()


//--------------------------------------------
// Replacing
const priceGB = '£288,97';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));


//--------------------------------------------
// Booleans 
const planeN = 'A320neo';
console.log(planeN.includes('A320'))
console.log(planeN.startsWith('A320'))
console.log(planeN.startsWith('B12'))
console.log(planeN.endsWith('neo'))


//--------------------------------------------
// Split : splits string by the letter/symbol specified 
// and returns them in an array
console.log('a+very+nice+string'.split('+'));
console.log('Elena Yi'.split(' '));

const [firstName, lastName] = 'Elena Yi'.split(' ');
const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // 2 ways of getting same result
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));    
    }
    console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis')
capitalizeName('chretien alfred attevelt')


//--------------------------------------------
// Padding
const message = 'Go to gate 23!'

//padStart(desired length of string, filler)
console.log(message.padStart(25, '+').padEnd(35, '+')); 
console.log('Jonas'.padStart(25, '+'));

// Real-life example
const maskCreditCard = function (number) {
    const str = number + ''; // converting number to str
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(123412341234))


//--------------------------------------------
// Repeat
const message2 = 'Bad weather... All departures delayed  ';
console.log(message2.repeat(7))