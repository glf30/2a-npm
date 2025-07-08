// 0. Import the Fahrenheit and Celcius classes from the third-party library
const { Fahrenheit, Celcius } = require("@khanisak/temperature-converter")

// 1. Write a function that takes degrees fahrenheit and returns the temperature in degrees celsius.
function fahrenheitToCelcius(degrees) {
  // call the function the same way as the documentation has
  return new Fahrenheit(degrees).toCelcius().value;
  // .toCelcius gives us an object like this:
  /*
  Celcius {
  value: 0,
  toCelcius: [Function (anonymous)],
  toDelisle: [Function (anonymous)],
  toFahrenheit: [Function (anonymous)],
  unit: { name: 'Celcius', code: '°C' }     
}
  */
 // we only want THE VALUE!! 
//   const celcius = new Fahrenheit(degrees).toCelcius();
//   return celcius;
}

// You can convert degrees fahrenheit to degrees celsius by:
// 1. subtracting 32 from the degrees fahrenheit
// 2. multiplying the result by 5
// 3. dividing that result by 9

/**
 * fahrenheitToCelsius
 * -------------------
 * Converts degrees fahrenheit to celsius.
 * @param {number} degrees - The temperature in degrees fahrenheit.
 * @returns {number} - The temperature in degrees celsius.
 */

// 3. (Don't forget to do 2 at the bottom of the file first, and test it!) Write a function that takes degrees celsius and returns the temperature in degrees fahrenheit.
const celciusToFahrenheit = (degrees) => {
	return new Celcius(degrees).toFahrenheit().value;
}

// You can convert degrees celsius to degrees fahrenheit by:
// 1. multiplying the degrees celsius by 9
// 2. dividing the result by 5
// 3. adding 32 to that result

/**
 * celsiusToFahrenheit
 * -------------------
 * Converts degrees celsius to fahrenheit.
 * @param {number} degrees - The temperature in degrees celsius.
 * @returns {number} - The temperature in degrees fahrenheit.
 */

// 5. (Don't forget to do 4 at the bottom of the file first and test it!) Write a function that takes a temperature and a scale (either "f" for fahrenheit or "c" for celsius) and returns the temperature in the other scale. As a bonus, use the functions you wrote above to do this.

/**
 * convertTemperature
 * -------------------
 * Converts degrees in the given scale to the other scale.
 * @param {number} degrees - The temperature.
 * @param {string} scale - The scale to convert from.
 * @returns {number} - The temperature in the other scale.
 */

function convertTemperature(degrees, scale) {
	// check our scale - "f" or "F" or "c" or "C"
	// if "f" -> convert to celcius
	if (scale.toLowerCase() === "f"){
		return fahrenheitToCelcius(degrees)
	} else if (scale.toLowerCase() === "c"){
		return celciusToFahrenheit(degrees)
	} else {
		// custom error that we create and specify the message
		//throw new Error(`User should enter "f" or "c"`)
		console.log((`User should enter "f" or "c"`))
		return null;
	}

}
// 2. Export the fahrenheitToCelsius function in an object so that it can be imported in other files. Then run the tests to make sure your function works.

// 4. Export the celsiusToFahrenheit function in the object at the bottom of the file. Then run the tests to make sure your function works.

// 6. Export the convertTemperature function in the object at the bottom of the file. Then run the tests to make sure your function works.

module.exports = {
	fahrenheitToCelcius,
	celciusToFahrenheit,
	convertTemperature
};
