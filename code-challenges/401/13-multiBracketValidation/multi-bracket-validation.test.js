'use strict';

const mbv = require('./multi-bracket-validation.js');


describe('Testing Challenge 13: Multi Bracket Validation', () => {

    it('Should handle a single set of brackets', () => {
        let testString = '{}';

        let actual = mbv(testString);
        let expected = true;

        expect(actual).toEqual(expected);
    });


    it('Should handle multiple sets of brackets', () => {
        let testString = '{}[]()';

        let actual = mbv(testString);
        let expected = true;

        expect(actual).toEqual(expected);
    });


    it('Should handle balanced brackets with characters', () => {
        let testString = '{some}[text](to throw it off)';

        let actual = mbv(testString);
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Should handle nested brackets', () => {
        let testString = '{{[]}}';

        let actual = mbv(testString);
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Should handle unbalanced brackets', () => {
        let testString = '}{[}}';

        let actual = mbv(testString);
        let expected = false;

        expect(actual).toEqual(expected);
    });

    it('Should handle unbalanced brackets with characters', () => {
        let testString = '{aldfjlalkd)kjdfalkdj[}';

        let actual = mbv(testString);
        let expected = false;

        expect(actual).toEqual(expected);
    });

    it('Should handle a string with no brackets', () => {
        let testString = 'Test string that has no brackets';

        let actual = mbv(testString);
        let expected = true;

        expect(actual).toEqual(expected);
    });

});
