# Lesson 2A: NPM

### Introduction

We'll be making a simple Node app today that converts from Celsius to Fahrenheit or vice versa. It will take input from users on the command line and output the answer they're looking for.  To achieve this, we will be utilizing third-party libraries.

### Learning Objectives
- What is NPM
- How to install third-party libraries.
- How to work with `package.json`.
- How scripts in `package.json` work.
- How to take user input in the terminal using `process.argv`.

## What is NPM

- NPM is a package manager for Node.js packages (otherwise known as modules).
- The NPM program is installed on your computer when you installed Node.js

## How to setup NPM

Before taking any action, it's important to be in the _**root directory**_ of your application via the terminal. 

One way we can ensure we're in the right place is to use VS Code to open an integrated terminal where the file is. You can pull up a menu on that particular file in VS Code's file explorer and choose "Open In Integrated Terminal". You have to do what's typically called a "secondary click" on the file to pull up this menu. This is typically done in one of three ways:

- holding the control key as you click
- clicking with the right button on a mouse or trackpad with multiple buttons
- tapping with two fingers spaced about a half inch apart

Doing one of these secondary clicks on a file ought to pull up a menu, and on that menu should be "Open In Integrated Terminal". Choosing that option will always open the terminal in the correct location for the file you clicked.

Once you are in the correct place in the terminal, use the following command to initialize a node project:

A) In terminal, initialize the project

```
npm init -y
```

When this is done for the first time, a **package.json** should appear. Open the file. There should be a property that says `"main": "index.js",`. If it says `"main": "final.js",` instead, edit this file to say `"main": "index.js",`. Most things in a **package.json** file should never be edited, but for the sake of learning about Node applications correctly, these small details must be aligned correctly.

## What is a package.json

The **package.json** file is the heart of any Node project. It records important metadata about a project, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package. It is generated once you install Node modules. Dependencies are just modules that are REQUIRED for your application to function; your application DEPENDS on the modules.

The **package-lock.json** is created for locking the dependency with the installed version. It will install the exact version of that package in your application and save it in **package.json**

---

## Tempinator Project

Now let’s explore the core benefit of NPM: using **third-party libraries** to save time and avoid reinventing the wheel.

We’re going to build a small Node.js app that converts temperatures between Fahrenheit and Celsius — and we’ll **use a prebuilt NPM package** to handle the conversion for us.

---

### Why Use a Library?

Let’s say we wanted to convert Fahrenheit to Celsius manually. We could write a function like this:

```js
function fahrenheitToCelsius(degrees) {
  return (degrees - 32) * (5 / 9);
}
```

This works, but what if someone had already solved this problem for us?

Good news: **someone has!**

---

### Installing the `@khanisak/temperature-converter` Package

Let’s install a package from NPM that will help us with this.

In your terminal, run:


```
npm install @khanisak/temperature-converter
```

You’ll see the package added to your `node_modules` folder and listed as a dependency in your `package.json`.

---

### How This Library Works

[Let's take a look at the documentation on npmjs.com](https://www.npmjs.com/package/@khanisak/temperature-converter?activeTab=readme)

The `@khanisak/temperature-converter` gives us access to classes for Fahrenheit and Celcius.  Each class includes a method to convert the temperature into the opposite scale:

- `new Fahrenheit(value).toCelsius()` converts Fahrenheit to Celsius
- `new Celsius(value).toFahrenheit()` converts Celsius to Fahrenheit

---

### Refactoring Our Code to Use the Library

Let’s rewrite our temperature conversion logic using this package instead of manually calculating.


0. Create a file called `logic.js` and import the necessary classes

```js
// 0. Import the Fahrenheit and Celcius classes from the third-party library
const { Fahrenheit, Celsius } = require("@khanisak/temperature-converter");
```

1. Convert Fahrenheit to Celsius

We’ll use the `Fahrenheit` class from the package to convert Fahrenheit to Celsius.

```js

// 1. Utilize the Fahrenheit class to convert degrees fahrenheit to degrees celsius.
function fahrenheitToCelsius(degrees) {
  return new Fahrenheit(degrees).toCelsius();
}

```

2. Export the `fahrenheitToCelsius` Function

Once you've written the `fahrenheitToCelsius` function, you need to export it so other files can use it (like your test file or the interface we'll build later).

```js
// 2. Export the fahrenheitToCelsius function in an object so that it can be imported in other files. 
// Then run the tests to make sure your function works.

module.exports = {
  fahrenheitToCelsius,
};

```

We'll repeat the same steps for the Celcius to Fahrenheit conversion.

```js

// 3. Utilize the Celcius class to convert degrees celcius to degrees fahrenheit.
function celsiusToFahrenheit(degrees) {
  return new Celsius(degrees).toFahrenheit();
}
```

```js
// 4. Export your new conversion function
module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};

```
5. Convert Between Scales Dynamically
Now we’ll use both functions in a single one that handles either direction based on a "c" or "f" input.  We want to make sure 

```js
// 5. Utilize both classes to write a flexible converter function.

function convertTemperature(degrees, scale) {
  if (scale.toLowerCase() === "f" && typeof scale === "string") {
    return fahrenheitToCelsius(degrees);
  } else if (scale.toLowerCase() === "c" && typeof scale === "string") {
    return celsiusToFahrenheit(degrees);
  } else {
    throw new Error("should return null if the scale is not 'f' or 'c'");
  }
}

```

And finally, we'll do our last import

```js

// 6. All 3 functions should be imported

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  convertTemperature,
};

```

We’ve now replaced all our manual math with clean, readable code that uses a reusable package.  Now we should run our tests again to see if everything is passing!

If all is successful, we'll be safe to set up our actual application by building an interface.  In your interface.js file, you should see the following.
We've already imported the required functions at the top.  

```js
// 1. Import the object from logic.js that contains the functions you need. COMPLETED
const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  convertTemperature,
} = require("./logic");
```

2. Grab the variables you'll need from the user's input (process.argv).
We're going to run our interface utilizing our program arguments.
process.argv keeps track of the commands we are running in the terminal in an array.  So if we run `node interface.js` our `process.argv` will look like this:

```js
[`node`, `interface.js`]
```

We can simply pass more arguments like such:

```bash
node interface.js 32 f
```

This makes our `process.argv` array look like this:

```js
[`node`, `interface.js`, 32, `f`]
```

Let's use this knowledge to access what we need and convert our Number into a Float

```js
//2. Grab the variables you'll need from the user's input (process.argv).
const args = process.argv.slice(2);

const scale = args[1];

const degrees = parseFloat(args[0]);

```
3. Call the function that will convert the temperature, passing in the user's input.
```js
if (isNaN(degrees) || (scale !== "f" && scale !== "c")) {
  console.error("Usage: node interface.js <temperature> <scale: 'f' or 'c'>");
  process.exit(1);
}
```
4. Print the result to the console.

```js
const convertedTemp = convertTemperature(degrees, scale);

console.log(
  `Converted temperature: ${convertedTemp.toFixed(2)} degrees ${
    scale === "f" ? "Celsius" : "Fahrenheit"
  }`
);
```

Using a library like `@khanisak/temperature-converter` or `jest` is a small taste of what professional developers do every day:

- Research existing tools

- Read documentation

- Use packages instead of reinventing the wheel

In the next lesson, we'll be introducing the library that is the focus of this course `Express`, allowing us to easily build our own APIs
