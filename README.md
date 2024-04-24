# Lecture # 1 - JavaScript Fundamentals

## Lecture Topics
- [ ] Define what a variable is
- [ ] Initialize variables in JavaScript
- [ ] Retrieve and change the value of variables
- [ ] Explain the difference between:
    - Using `const` for declaring variables
    - Using `let` for declaring variables
- [ ] Use `console.log()` to inspect the values of variables and print those values to the console
- [ ] Use the `debugger` statement to invoke a debugger in the browser
- [ ] Explain the difference between the following data types:
    - `number`
    - `string`
    - `boolean`
- [ ] Use the `typeof` operator to check the data type of a value or variable's value
- [ ] Concatenate strings with the `+` operator
- [ ] Interpolate Variables and Other JavaScript Expressions Inside Template Literals
- [ ] Explain the difference between the following equality operators:
    - strict equality operator `===`
    - strict inequality operator `!==`
    - loose equality operator `==`
    - loose inequality operator `!=`
- [ ] Compare numbers with relational operators:
    - greater than (`>`)
    - greater than or equals (`>=`)
    - less than (`<`)
    - less than or equals (`<=`)
- [ ] Review syntax differences between `if` / `else` statements, ternary expressions, and `switch` statements
- [ ] Explain the difference between the following logical operators:
    - `!` NOT
    - `&&` AND
    - `||` OR


## Deliverables

We've been asked to build a website for a new restaurant, Flatburger, that displays a menu of food served at the restaurant.

Today we will review JavaScript Fundamentals that may help us accomplish some tasks related to displaying data on the website.

1. Initialize a variable named `greeting` using `const` and assign it the value of the `string` "Welcome to Flatburger!"
2. Initialize two variables named `num1` and `num2` using `let` and assign the value of a `number` to each of the two variables.
3. Initialize a variable named `sum` using `const` and assign it the value resulting from the sum of values of the variables `num1` and `num2`.
4. Initialize a variable named `sumString` using `const` whose value should be a `string` that incorporates the values of `num1`, `num2`, and `sum` into the `string` using string concatenation or string interpolation. For example, if `num1` has the value of 7, `num2` has the value 14, and `sum` has the value of 21, the value of `sumString` should be `7 + 14 = 21`.
5. Write an `if` statement that will check if the value of `num1` is strictly equal to `7` or `49`. If `num1` is strictly equal to `7` or `49`, use `console.log()` to print the following `string` to the console: "That's a lucky number!"
6. Write an `else` clause after the `if` statement that will print "That's not a lucky number." to the console using `console.log()`. The code inside the `else` clause should run if the `if` statement's condition is not true.
7. Write a ternary expression that will evaluate to the `string` "Lucky Sevens!" if the value of `num1` and `num2` are both strictly equal to `7`. Otherwise, the ternary expression should evaluate to the `string` "Better luck next time".


## Variables
A variable is a container in which we can store values for later retrieval.

Imagine a box that can hold any type of data: a number, a string, etc. We take some data that we want to store, place it inside the box, and hand the box off to the JavaScript engine, which stores it in memory. All done! Our data is safely cached until we need to access it again.

This is how we initialize variables in JavaScript. First, we declare the variable, then we assign a value to it

``` javascript
const number = 7

let phrase = "Hello World!"
```

When you declare a variable with `const`, a value must be immediately assigned to it. Variables declared with `const`, cannot be reassigned or redeclared

``` javascript
const number
//=> Uncaught SyntaxError: Missing initializer in const declaration

const number = 7

number = 8
//=> Uncaught TypeError: Assignment to constant variable.

const number = 9
//=> Uncaught SyntaxError: Identifier 'number' has already been declared
```

When you declare a variable with `let`, a value does not need to be immediately assigned to it. Variables declared with `let` can be reassigned, but they cannot be redeclared

``` javascript
let food
//=> undefined

food = "Flatburger"

let food = "Hamburger"
//=> Uncaught SyntaxError: Identifier 'food' has already been declared
```

## Data Types
Data types describe the different types or kinds of data that we will be working with and storing in variables. The four most basic data types in JavaScript are `number`, `string`, `boolean`, and `undefined`

A `number` is a numerical value such as `7` or `4.9`

``` javascript
const number = 7
```

A `string` is a series of characters such as `Hello World`. A string can be any text inside single quotes `''`, double quotes `""`, or backticks ` `` `

``` javascript
const phrase = 'Hello World!'

const anotherPhrase = "Welcome to Flatiron School!"

const yetAnotherPhrase = `Strings are awesome!`
```

A `boolean` value is one that can either be `true` or `false`

``` javascript
let isStudent = true

let isHungry = false
```

`undefined` represents something that will have a value eventually. When a variable has been declared but has not yet been assigned a value, the value of that variable will be `undefined`. In the example below, the value of the `name` variable will be `undefined`, which is like saying we haven't decided on a name yet, but we plan to give it a value at some point

``` javascript
let name
//=> undefined
```

`null` can be assigned to a variable as a representation of no value or that the value does not exist. `null` and `undefined` are not the same. In the example below, we assign the value of `null` to the `name` variable, which is like saying there is no name

``` javascript
let name = null

null === undefined
//=> false
```

The `typeof` operator can be used to check the data type of a value or variable's value

``` javascript
typeof 7
//=> 'number'

typeof "Hello"
//=> 'string'

typeof true
//=> 'boolean'

typeof undefined
//=> 'undefined'

let name

typeof name
//=> 'undefined'

name = "Alice"

typeof name
//=> 'string'
```