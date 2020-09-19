'use strict';

const Hashtable = require('./hashtable.js');

describe('Testing challenge 30: Hashtables: ', () => {

    describe('Testing hash() method: ', () => {

        it('Should hash a key', () => {

            let myHash = new Hashtable(10);
            let actual = myHash.hash('a');
            let expected = 3

            expect(actual).toEqual(expected);

        });

    });


    describe('Testing add() method: ', () => {

        it('Should add one to hashtable', () => {

            let myHash = new Hashtable(3);
            myHash.add('one item', 1);
            let actual = myHash.contains('one item');
            let expected = true;

            expect(actual).toEqual(expected);

        });


        it('Should add multiple items to hashtable', () => {

            let myHash = new Hashtable(100);
            myHash.add('one item', 1);
            myHash.add('random soo', 99);
            myHash.add('bobby code', 42);
            let actual1 = myHash.contains('one item');
            let actual2 = myHash.contains('random soo');
            let actual3 = myHash.contains('Waldo');
            let actual4 = myHash.contains('bobby code');
            let actual = [actual1, actual2, actual3, actual4];
            let expected = [true, true, false, true];



            expect(actual).toEqual(expected);

        });

    });


    describe('Testing get() method: ', () => {


        it('Should get a key', () => {

            let myHash = new Hashtable(100);
            myHash.add('one item', 1);
            myHash.add('random soo', 99);
            myHash.add('bobby code', 42);
            let actual = myHash.get('random soo');
            let expected = 99;

            expect(actual).toEqual(expected);

        });


        it('Should get a key Test #2', () => {

            let myHash = new Hashtable(100);
            myHash.add('one item', 1);
            myHash.add('random soo', 99);
            myHash.add('bobby code', 42);
            let actual = myHash.get('one item');
            let expected = 1;

            expect(actual).toEqual(expected);

        });


        it('Should return null if key does not exist', () => {

            let myHash = new Hashtable(100);
            myHash.add('one item', 1);
            myHash.add('random soo', 99);
            myHash.add('bobby code', 42);
            let actual = myHash.get('FooBar');
            let expected = null;

            expect(actual).toEqual(expected);

        });


        it('Should retrieve from a bucket of values', () => {

            let myHash = new Hashtable(100);
            myHash.add('noe item', 1);
            myHash.add('one item', 13);

            let actual1 = myHash.get('noe item');
            let actual2 = myHash.get('one item');

            let actual = [actual1, actual2];
            let expected = [1, 13];

            expect(actual).toEqual(expected);

        });

    });

});
