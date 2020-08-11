'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named greeting that takes in a string and returns the string in all uppercase letters.

Then, write a function named speaker that takes in a string and a callback function. The speaker function should return the string in all uppercase letters only by invoking the callback.
------------------------------------------------------------------------------------------------ */

/**
 * Greeting takes in a string argument
 *
 * The return value is the given argument in all uppercase letters.
 * @param {string} word - Any String Argument
 */
const greeting = (word) => {
  let capitilizedWord = word.toUpperCase();
  return capitilizedWord;
};

/**
 * Speaker takes in two arguments: message, callback.
 *
 * It will return the value of the message after being passed through the callback function provided.
 * @param {string} message - Any string
 * @param {function} callback - A function that handles the conversion of a message to uppercase letters.
 */
const speaker = (message, callback) => {
  let caplilizedMessage = callback(message);
  return caplilizedMessage;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addValues that takes in an array and a value and pushes the value into the array. This function does not need a return statement.

Then, write a function named addNumbers that takes in four arguments:
  - A number to be added to an array
  - An array into which the number should be added
  - The number of times the number should be added
  - A callback function to use to add the numbers to the array (Hint: you already defined it)

Within the addNumbers function, invoke the callback function as many times as necessary, based on the third argument of the addNumbers function.

Return the modified array.
------------------------------------------------------------------------------------------------ */
/**
 * AddValues takes in an array and pushes a value into that array.
 *
 * There is no return value.
 * @param {array} arr - Array of integers
 * @param {number} value - Any integer
 */
const addValues = (arr, value) => {
  arr.push(value)
};

/**
 * AddNumbers has four arguments, num, arr, times, callback. Num: Number to be added to an array, Arr: An array in which the number should be added to, times: The number of times the number should be added, and callback: A function that handles the adding of numbers to the array.
 *
 * The return value is the modified array.
 * @param {number} num - Any integer
 * @param {array} arr - Array of Integers
 * @param {number} times - Any integer
 * @param {function} callback - A function that handles the adding of numbers to the array.
 */
const addNumbers = (num, arr, times, callback) => {
  for (let i = 0; i < times; i++) {
      callback(arr, num)
  }
  return arr
};

/* ------------------------------------------------------------------------------------------------

CHALLENGE 3

Write a function named createList that takes in an array of the current store intentory.

The inventory is formatted like this:
[
  { name: 'apples', available: true },
  { name: 'pears', available: true },
  { name: 'oranges', available: false },
  { name: 'bananas', available: true },
  { name: 'blueberries', available: false }
]

This function should use forEach to populate your grocery list based on the store's inventory. If the item is available, add it to your list. Return the final list.
------------------------------------------------------------------------------------------------ */
/**
 * CreateList takes in an array of objects representing current store inventory.
 *
 * The return value is a list of available grocery list items
 * @param {array} availableItems - Array of an Objects
 */
const createList = (availableItems) => {
    let list = []
  availableItems.forEach(element => {
      if (element.available) {
        list.push(element.name)
      }
  });
  return list;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named fizzbuzz that takes in an array of numbers.

Iterate over the array using forEach to determine the output based on several rules:
  - If a number is divisible by 3, add the word "Fizz" to the output array.
  - If the number is divisible by 5, add the word "Buzz" to the output array.
  - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
  - Otherwise, add the number to the output array.

Return the resulting output array.
------------------------------------------------------------------------------------------------ */
/**
 * Fizzbuzz takes in an array of numbers as its only argument.
 *
 * The return value is determined based on the following rules:
 *
 * 1: If a number is divisible by 3, the word "Fizz" is added to the output array.
 *
 * 2: If a number is divisible by 5, the word "Buzz" is added to the output array.
 *
 * 3: If a number is divisible by both 3 and 5, the phrase "Fizz Buzz" is added to the output array.
 *
 * Otherwise: Add the number to the output array.
 * The return value is an array with the results of these rules.
 * @param {array} arr - Array of Integers
 */
const fizzbuzz = (arr) => {
    let output = []
  arr.forEach(element => {
      if (!(element % 3) && !(element % 5)) {
        output.push('Fizz Buzz')
      } else if (!(element % 3)) {
          output.push('Fizz')
      } else if (!(element % 5)) {
          output.push('Buzz')
      } else {
          output.push(element)
      }
  });
  return output
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the message with all uppercase characters', () => {
    expect(speaker('hello 301 students!', greeting)).toStrictEqual('HELLO 301 STUDENTS!');
  });
});

describe('Testing challenge 2', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

describe('Testing challenge 4', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});
