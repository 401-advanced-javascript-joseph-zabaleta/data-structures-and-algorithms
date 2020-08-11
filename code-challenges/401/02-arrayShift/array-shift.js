'use strict';

/**
 * Inserts the value into the given array at the middle index. Returns the original array modified. If the array is of odd length, it will round up the middle index.
 * @param {*} arr
 * @param {*} value
 */
let insertShiftArray = (arr, value) => {
    let middle = Math.ceil(arr.length / 2);

    let current = arr[middle];
    arr[middle] = value;

    for (let i = middle + 1; i < arr.length; i++) {
        let temp = arr[i];
        arr[i] = current;
        current = temp;
    };

    arr.push(current);

    return arr;
};

module.exports = insertShiftArray;
