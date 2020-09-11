'use strict';

/**
 * Takes in an array and performs an insertion sort algorithm to sort the array.
 * @param {*} arr
 */
function insertSort(arr) {

    for (i = 1; i < arr.length; i++) {

        let j = i - 1;
        let temp = arr[i];

        while (j >= 0 & temp < arr[j]) {
            arr[j + 1] = arr[j]
            j -= 1;

            arr[j + 1] = temp;
        };

    };
};
