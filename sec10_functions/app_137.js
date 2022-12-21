/////////////////////////////////////
// 137. Closures
/* A closure gives a function access to all the variables of its parent function, 
even after that parent function has returned.
The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
= A closure is like a backpack that a function carries around wherever it goes.
This backpack has all the variables that were present in the environment where the function was created.

We do NOT have to manually create closures, this is a JS feature that happens automatically.
We can't even access closed-over variables explicitly.
A cloure is NOt a tangible JS object.*/

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

const bookier = secureBooking();
booker();
booker();
booker();
console.dir(booker);


// 138. More Closure Examples
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();//-> closure = a:23
console.dir(f);

// Re-assigning f function
h();
f(); //-> closure = b:777
console.dir(f);


// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);

    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);