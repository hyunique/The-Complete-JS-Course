// 143. the new At method

const arr = [23, 11, 54];
console.log(arr[0]);
console.log(arr.at(0)); //ES2022

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1));
console.log(arr.at(-1));


////////////////////////////////////////////////////
//143. Looping arrays : For Each
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
    // [first:index, second:element] with .entries()
    for (const [i, movement] of movements.entries()){
    if (movement > 0) {
        console.log(`Movement ${i + 1}:You deposited ${movement}`);
    } else {
        //Math.abs removes - sign from element
        console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`)
    }
}


console.log('------------------FOREACH------------------')
//forEach is technically a higher-order function which requires callback function
//with each iteration, function will be called and each element of array will be passed in as an argument
// aurgument name can be anything
// forEach method passes in first.current element second.index third.array(order matters)
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}:You deposited ${mov}`);
    } else {
        //Math.abs removes - sign from element
        console.log(`Movement ${i + 1}:You withdrew ${Math.abs(mov)}`)
    }
})

/* continue and break statement do not work in forEach loop.
You can't break out of forEach. So if that's needed, use for of instead.
*/


////////////////////////////////////////////////////
//145. forEach with Maps and Sets

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
  
currencies.forEach(function (value, key, map){
    console.log(`${key}: ${value}`)
})

const currenciesUnique = new Set(['USD', 'EUR', 'EUR', 'GBP', 'USD']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) { //so here use _ instead of key
    console.log(`${key}: ${value}`)
    // this logs USD: USD EUR: EUR GBP: GBP. There is no key or index in Sets
})