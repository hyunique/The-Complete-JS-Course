let rep = 1;
while (rep <= 5) {
    console.log(`WHILE: Lisfting weights repetition ${rep}`)
    rep++
}

// Generate random number once
let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6) {
    // While the value is not 6, log this and dice again
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    // If the value is 6, log this and stop iteration
    if (dice === 6) console.log('Loop is about to end...')
}

/* While loop is suitable when you don't know how many round of iteration is needed.
Basically when you don't know the counter. There can be a counter, but it is not necessary.
For the same reason, be careful for infinite loop with While.
When you loop over an array, then you know the counter. In that case, for loop is better */