// 117. Maps
// a data structure we can use to map values to keys
// like in Object, data is stored in key - value pairs in maps
// unlike objects, keys can be any type of data


// creating maps
const rest = new Map(); 

// adding elements
rest.set('name', 'Classico Italiano');  
rest.set(1, 'Amsterdam, Netherlands'); 
rest.set(2, 'Den haag, Netherlands'); // This adds and returns updated Map. This allows to chain set method like:

//
rest.set('categories', ['italian', 'pizzeria', 'vegetarian', 'organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

// To read data from the Map
console.log(rest.get('name'))
console.log(rest.get(true)) // Data type matters

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))) //This is not very readable code, so don't over use it.

// To check if an element is included in Map
rest.has('categories')

// To delete an element
rest.delete(2)

// To know the number of elements in Map
console.log(rest.size) //7

// To delete everyting
// rest.clear()

// To use array data type as a key of Map
const arr = [1, 2, 3];
rest.set(arr, 'test');
rest.get(arr)
rest.set(document.querySelector('h1', 'Heading'))


// 118. Maps: Iteration

// To create Maps with multiple values

const question = new Map([
    ['question', 'What is the best menu?'],
    [1, 'Pasta'],
    [2, 'Pizza'],
    [3, 'Stampot'],
    ['correct', 2],
    [true, 'Correct !!!!'],
    [false, 'Try again']
]);
console.log(question) // This logs same structure as logging ( Object.entries(menus) )

// Conver object to map
// const hoursMap = new Map(Object.entries(openingHours))


// Iteration
console.log(question.get('question'))
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer))

// To convert map to array
console.log([...question])


// Methods
console.log([...question.entries()])
console.log([...question.keys()])
console.log([...question.values()])