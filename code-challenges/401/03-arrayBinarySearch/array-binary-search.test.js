'use strict';

const binarySearch = require('./array-binary-search');

describe('Testing Challenge 03 Binary Search in a sorted 1D array:', () => {

    it('Should handle an empty array', () => {
        expect(binarySearch([], 10293012)).toStrictEqual(-1);
    });

    it('Should return the index value if the search key is within the given array', () => {
        expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
        expect(binarySearch([4,8,15,16,23,42], 23)).toStrictEqual(4);
    });

    it('Should return -1 if the search key is not within the given array', () => {
        expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
        expect(binarySearch([11,22,33,44,55,66,77], 1000)).toStrictEqual(-1);
    });

    it('Should handle both even and odd length arrays', () => {
        expect(binarySearch([1, 2, 3, 4], 4)).toStrictEqual(3);
        expect(binarySearch([1, 2, 3, 4], 5)).toStrictEqual(-1);

        expect(binarySearch([1, 2, 3, 4, 5], 4)).toStrictEqual(3);
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toStrictEqual(4);
    });

});
