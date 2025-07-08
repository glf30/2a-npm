// Add your interface code below!
const {
  fahrenheitToCelcius,
  celciusToFahrenheit,
  convertTemperature,
} = require("./logic");

// 1. Import the object from logic.js that contains the functions you need. COMPLETED

// 2. Grab the variables you'll need from the user's input (process.argv).

/*
process.argv - array that keeps track of program inputs
node interface.js - ['node.exe', 'interface.js']
node interface.js 32 f - ['node.exe', 'interface.js', '32', 'f' ]
*/
console.log(process.argv)
//['node.exe', 'interface.js', '32', 'f' ]
// process.argv[0] = node.exe
// process.arg
const degrees = parseFloat(process.argv[2]); //parseFloat - convert to Decimal
const scale = process.argv[3];
// console.log("Degrees: " + degrees)
// console.log("Scale: " + scale)


// 3. Call the function that will convert the temperature, passing in the user's input.

console.log("Converting...")
const temperature = convertTemperature(degrees, scale);

// 4. Print the result to the console.

console.log(temperature.toFixed(2))

/**
 *
 * This file here isn't going to be where we code most of our functions.
 * this is where we call node and pass in those perameters.
 */
