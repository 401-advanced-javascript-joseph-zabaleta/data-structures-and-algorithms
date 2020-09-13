'use strict';

const quickSort = require('./quick-sort.js');

describe('Testing Challenge 28 Quick Sort: ', () => {


    it('Should handle the sample array', () => {
        let arr = [8,4,23,42,16,15];
        quickSort(arr);
        let expected = [4, 8, 15, 16, 23, 42];

        expect(arr).toEqual(expected);
    });


    it('Should handle a reversed array', () => {
        let arr = [20, 18, 12, 8, 5, -2];
        quickSort(arr);
        let expected = [-2, 5, 8, 12, 18, 20];

        expect(arr).toEqual(expected);
    });


    it('Should handle a few unqiues', () => {
        let arr = [5,12,7,5,5,7];
        quickSort(arr);
        let expected = [5, 5, 5, 7, 7, 12];

        expect(arr).toEqual(expected);
    });


    it('Should handle nearly sorted array', () => {
        let arr = [2,3,5,7,13,11];
        quickSort(arr);
        let expected = [2, 3, 5, 7, 11, 13];

        expect(arr).toEqual(expected);
    });


});
