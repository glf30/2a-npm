# Lesson 2A: NPM

### Introduction

We'll be making a simple Node app today that converts from Celsius to Fahrenheit or vice versa. It will take input from users on the command line and output the answer they're looking for.  To achieve this, we will be utilizing third-party libraries.

### Learning Objectives
- What is NPM
- How to install third-party libraries.
- How to work with `package.json`.
- How scripts in `package.json` work.

## What is NPM

- NPM is a package manager for Node.js packages (otherwise known as modules).
- The NPM program is installed on your computer when you installed Node.js

## How to setup NPM

Once you are in the correct place in the terminal, use the following command to initialize a node project:

A) In terminal, initialize the project

```
npm init -y
```

When this is done for the first time, a **package.json** should appear. Open the file. There should be a property that says `"main": "index.js",`. Most things in a **package.json** file should never be edited, but for the sake of learning about Node applications correctly, these small details must be aligned correctly.

## What is a package.json

The **package.json** file is the heart of any Node project. It records important metadata about a project, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package. It is generated once you install Node modules. Dependencies are just modules that are REQUIRED for your application to function; your application DEPENDS on the modules.

The **package-lock.json** is created for locking the dependency with the installed version. It will install the exact version of that package in your application and save it in **package.json**


NPM summary:

- Research existing tools

- Read documentation

- Use packages instead of reinventing the wheel

In the next lesson, we'll be introducing the library that is the focus of this course `Express`, allowing us to easily build our own APIs
