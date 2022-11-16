//44. Object Methods

const elena = {
    firstName: 'Elena',
    lastName: 'Yi',
    birthYear: 1992,
    job: 'student',
    friends: ['Chris', 'Robin', 'Valtteri'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037-birthYear
    // }

    // calcAge: function () {
    //     return 2037 - this.birthYear
    // }

    //Method below adds 'age' key and adds value in it. 
    calcAge: function () {
        this.age = 2037 - this.birthYear
        return this.age
    }
}

console.log(elena.calcAge())
console.log(elena.age)

