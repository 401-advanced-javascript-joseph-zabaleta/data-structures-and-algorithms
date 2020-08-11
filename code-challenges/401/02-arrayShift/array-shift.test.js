'use strict';

const insertShiftArray = require('./array-shift');

describe('Testing Challenge 02 Insert and Shift an Array:', () => {

    it('Should add the new value to the middle of an array', () => {
        expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
    });

    it('Should handle both even and odd length arrays', () => {
        expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toStrictEqual([4,8,15,16,23,42]);
        expect(insertShiftArray([5, 3, 2, 2, 1, 1], 5)).toStrictEqual([5, 3, 2, 5, 2, 1, 1]);
    });

    it('Should handle different datatypes such as objects, strings, and numbers', () => {
        expect(insertShiftArray([{name: 'bob', house: 'white',}, {name: 'tim', house: 'blue',}], {name: 'john', house: 'green',})).toStrictEqual([{name: 'bob', house: 'white',},{name: 'john', house: 'green',}, {name: 'tim', house: 'blue',}])
    });

});
