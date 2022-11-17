// 47. Looping Arrays, Break and Continue
const elena = [
    'Elena',
    'Yi',
    2037 - 1992,
    'student',
    ['Robin', 'Rob', 'Lea'],
    true
];

const types = [];

for (let i = 0; i < elena.length; i++) {
    // Reading from array
    console.log(elena[i], typeof elena[i])

    //Filling array
    types.push(typeof elena[i])
}

console.log(types)





const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}
console.log(ages)




// continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < elena.length; i++) {
    //only log strings to console
    // basically end this iteration here and go back to first part. 
    //Only continue when conditional is met
    if (typeof elena[i] !== 'string') continue;
    console.log(elena[i], typeof elena[i])
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < elena.length; i++) {

    if (typeof elena[i] === 'number') break;
    console.log(elena[i], typeof elena[i])
}



//48. Loops in Loops

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}