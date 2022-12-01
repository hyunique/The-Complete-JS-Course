/* 116. Sets
 = Collection of unique values
 = Can never have duplicates = useful for certain situations
*/

const ordersSet = new Set([
    'pasta',
    'pizza',
    'Risotto',
    'pasta',
    'pizza'
]);
console.log(ordersSet) // logs {"pasta","pizza","risotto"}. All the duplicates are removed.
// Set looks similar to array and it is iterable
// but is very different from array: elements are unique, order is irrelevant.
// Set doesn't have indexs, hence there is no way to get values out of set

console.log(new Set('Jonas')); //logs Set(5) [ "J", "o", "n", "a", "s" ]

//To know the number of item in set. like array.length
console.log(ordersSet.size); // 3

//To know if an element is included in set. like array.includes()
console.log(ordersSet.has('Bread')) // false

// To add new element to the set
ordersSet.add('Garlic Bread')
console.log(ordersSet)

// To delete an element to the set
ordersSet.delete('Risotto')

// To delete everything in the set
ordersSet.clear()

// As sets are iterables, it is able to loop
for (const order of ordersSet) console.log(order)


//////////////// Use case
// to remove duplicated values from array
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
const staffUnique = [...new Set(staff)]; // This converts new set into array. Spread operator works exactly the same.
console.log(staffUnique);
console.log(
    new Set(['waiter', 'chef', 'waiter', 'manager', 'chef']).size // 3
)
