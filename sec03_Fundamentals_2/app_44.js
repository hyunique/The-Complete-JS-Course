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
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, 
        and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
}

console.log(elena.calcAge())
console.log(elena.age)
console.log(elena.getSummary())





//Coding Challenge #3
const mark = {
    fullName: 'Mark Miller',
    mass: 80,
    height: 1.8,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}

//calcBMI method can be refactored by using OOP
const john = {
    fullName: 'John Smith',
    mass: 70,
    height: 1.74,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}


if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI${mark.BMI} is higher than ${john.fullName}''s ${(john.BMI)}`)
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s ${(john.BMI)} is higher than ${mark.fullName}'s BMI${mark.BMI}`)

}