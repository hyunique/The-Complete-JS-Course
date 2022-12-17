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
});



////////////////////////////////
//150. the map method
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//     return mov * eurToUsd;
// })
const movementsUSD = movements.map(mov => mov * eurToUsd)
/* code below gives same result as above, but different philosophy.
map method suits better in modern js / functional programming
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor)
*/
console.log(movements)
console.log(movementsUSD)

const movDescriptions = movements.map((mov, i) => `Movement ${i+1}: You ${mov < 0 ? 'deposited':'withdrew'}${Math.abs(mov)}`);
console.log(movDescriptions)



////////////////////////////////
//152. the filter method

const deposits = movements.filter(function (mov) {
    return mov > 0;
})
const withdrawals = movements.filter(mov => mov < 0);
// const depositsFor = [];
// for (const mov of movements) if (mov >0) depositsFor.push(mov)

console.log(movements)
console.log(deposits, withdrawals)



////////////////////////////////
//153. the reduce method

//first argument of callback of reduce method is always accumulator
// With each iteration, the updated accumulator is returned
// Always manually return at the end of iteration. That value will be acc for next iteration 
// Second argument of the method is starting value. here: 0
const balance = movements.reduce(function (acc, cur, i, arr) {
    return acc + cur
}, 0);
console.log(balance)

// Maximum value
// When finding maximum value, always set the initial value as 1st element of the array
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]);
console.log(max)


////////////////////////////////
// 157. the Find method
/* While the Filter returns array of all the elements that match the conditoin,
Find method returns only the first element, which is not an array.
Usually goal of this method is to find a exact one element.
*/
const firstWithdrawal = movements.find(mov => mov < 0)
// returns -400

const account = accounts.find(acc => acc.owner === 'Jessica Davis');


// 162. Flat and FlatMap
// flat basically flattens depth of nested arrays.
// argument of flat method indicates the depth of nested arrays. default is 1
const flatArr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, 5, [6]], 7, 8];
console.log(arrDeep.flat(2)) 

// flatMap = .map().flat()
// when you need to flatten depth, you should use map and flat separately.
const overalBalance = accounts
    .flatMap(acc => acc.movements)
    .reduce(acc, mov => acc + mov, 0);
console.log(overalBalance3)
    

///////////////////////////////////////////////////////////////////
// 166. Array Methods Practice
// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
const accounts = [account1, account2, account3, account4];
  
// 1.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

// 2. use case of accumulator of reduce method
// const numDeposits1000 = account
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov >= 1000).length;
const numDeposits1000 = account
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
    // count++ returns 0 here
    
// prefixed ++ operator
let a = 10;
console.log(a++); // this still logs 10, although it actually added 1 to 'a'
console.log(a); // logs 11
console.log(++a); // this logs 12. it works same in eg. callback in reduce method

// 3. create new object with reduce method
const sums = accounts
    .flatMap(acc => acc.movements)
    .reduce((sums, cur) => {
        // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
    }, { deposits: 0, withdrawals: 0 });


// 4. convert string to title-case
// eg. this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
        .join(' ');
    return titleCase;
}
console.log(convertTitleCase('this is a nice title'))