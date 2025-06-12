const {
  Celcius,
  Fahrenheit,
} = require("@khanisak/temperature-converter");

// 1. Write a function that takes degrees fahrenheit and returns the temperature in degrees celsius.
// Now utilizing the Fahrenheit class from @khanisak/temperature-converter
function fahrenheitToCelsius(degrees) {
  return new Fahrenheit(degrees).toCelcius().value;
}
// You can convert degrees fahrenheit to degrees celsius by:
// 1. subtracting 32 from the degrees fahrenheit
// 2. multiplying the result by 5
// 3. dividing that result by 9

/**
 * fahrenheitToCelsius
 * -------------------
 * Converts degrees fahrenheit to celsius using Fahrenheit class from the @khanisak/temperature-converter library.
 * @param {number} degrees - The temperature in degrees fahrenheit.
 * @returns {number} - The temperature in degrees celsius.
 */

// 3. (Don't forget to do 2 at the bottom of the file first, and test it!) Write a function that takes degrees celsius and returns the temperature in degrees fahrenheit.
// Now utilizing the Celcius class from @khanisak/temperature-converter

// You can convert degrees celsius to degrees fahrenheit by:
// 1. multiplying the degrees celsius by 9
// 2. dividing the result by 5
// 3. adding 32 to that result

/**
 * celsiusToFahrenheit
 * -------------------
 * Converts degrees celsius to fahrenheit using Celcius class from the @khanisak/temperature-converter library.
 * @param {number} degrees - The temperature in degrees celsius.
 * @returns {number} - The temperature in degrees fahrenheit.
 */
function celsiusToFahrenheit(degrees) {
  return new Celcius(degrees).toFahrenheit().value;
}

// 5. (Don't forget to do 4 at the bottom of the file first and test it!) Write a function that takes a temperature and a scale (either "f" for fahrenheit or "c" for celsius) and returns the temperature in the other scale. As a bonus, use the functions you wrote above to do this.

/**
 * convertTemperature
 * -------------------
 * Converts degrees in the given scale to the other scale using wrapper functions above.
 * @param {number} degrees - The temperature.
 * @param {string} scale - The scale to convert from.
 * @returns {number} - The temperature in the other scale.
 */
function convertTemperature(degrees, scale) {
  if (scale.toLowerCase() === "f" && typeof scale === "string") {
    return fahrenheitToCelsius(degrees);
  } else if (scale.toLowerCase() === "c" && typeof scale === "string") {
    return celsiusToFahrenheit(degrees);
  } else {
    throw new Error("should return null if the scale is not 'f' or 'c'");
  }
}

// 2. Export the fahrenheitToCelsius function in an object so that it can be imported in other files. Then run the tests to make sure your function works.

// 4. Export the celsiusToFahrenheit function in the object at the bottom of the file. Then run the tests to make sure your function works.

// 6. Export the convertTemperature function in the object at the bottom of the file. Then run the tests to make sure your function works.

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  convertTemperature,
};