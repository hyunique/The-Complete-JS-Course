// 61. Debugging with the console and breakpoints

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) fix bug
        value: Number(prompt('degrees celsius')),
    }

// B) find bug
    console.table(measurement)
    console.log(measurement.value)
    // console.warn(measurement.value)
    // console.error(measurement.value)
    const kelvin = measurement.value + 273;
return kelvin;
}

// A) identify bug
console.log(measureKelvin())