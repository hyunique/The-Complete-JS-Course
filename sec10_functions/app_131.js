const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

//Higher-order function
//fn here is call-back function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Trnasformed string: ${fn(str)}`)

    console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)

const high5 = function () {
    console.log('hey');
};
document.body.addEventListener('click', high5);
['jonas', 'martha', 'adam'].forEach(high5);


