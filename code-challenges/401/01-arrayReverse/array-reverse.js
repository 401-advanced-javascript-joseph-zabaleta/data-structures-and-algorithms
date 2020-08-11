'use strict';

/**
 * Reverses elements in the given array. Returns a new array with the elements reversed.
 * @param {*} arr An array of items to be reversed.
 */
let reverseArray = (arr) => {
    let output = [];

    for (let i = (arr.length - 1); i >= 0; i--) {
        output.push(arr[i]);
    };

    return output;
};

module.exports = reverseArray;
