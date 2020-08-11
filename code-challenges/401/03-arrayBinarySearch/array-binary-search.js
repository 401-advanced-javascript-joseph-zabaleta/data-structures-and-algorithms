'use strict';

/**
 * BinarySearch takes in two parameters. An array and a search value. It will use a binary search method in order to search for the given value in the given array, if found it will return the index of the given value. If not found then return -1
 * @param {*} arr A sorted 1D array of integers
 * @param {*} value An integer
 */
let binarySearch = (arr, value) => {
    let output = -1;

    if (arr.length == 0 || value < arr[0] || value > arr[arr.length -1]) {
        return output;
    };

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.ceil((low + high) / 2);

        if (arr[mid] == value) {
            output = mid;
            break;
        };

        if (value < arr[mid]) {
            high = (mid - 1);
        } else {
            low = (mid + 1);
        };
    };

    return output;
};

module.exports = binarySearch;
