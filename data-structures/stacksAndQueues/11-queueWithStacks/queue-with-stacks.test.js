'use strict';


const { Stack, PseudoQueue } = require('./queue-with-stacks.js');

describe('Testing Challenge 10: Stack', () => {

    describe('Testing Stack Functionality: ', () => {


        describe('Testing the push method: ', () => {

            it('Should push one item onto the stack', () => {
                let s = new Stack()
                s.push(1);

                let actual = s.peek();
                let expected = 1;

                expect(actual).toEqual(expected);

            });

            it('Should push multiple items onto the stack', () => {
                let s = new Stack();
                s.push(1);
                s.push(2);
                s.push(3);

                let actual = s.peek();
                let expected = 3;

                expect(actual).toEqual(expected);
            });
        });


        describe('Testing the pop method: ', () => {

            it('Should pop one item off the stack', () => {
                let s = new Stack();
                s.push(1);
                s.push(2);
                s.push(3);

                let actual = s.pop();
                let expected = 3;

                expect(actual).toEqual(expected);
                expect(s.peek()).toEqual(2);
            });


            it('Should pop multiple items off the stack', () => {
                let s = new Stack();
                s.push(1);
                s.push(2);
                s.push(3);
                let actual = s.peek();
                let expected = 3;
                expect(actual).toEqual(expected);

                s.pop();
                s.pop();

                actual = s.peek();
                expected = 1;


                expect(actual).toEqual(expected);
            });

            it('Should throw an error when attempting to pop from an empty stack', () => {
                let s = new Stack();

                let actual = () => {
                    s.pop();
                };

                expect(actual).toThrow('Can\'t pop from an empty stack!')
            });

        });


        describe('Testing the peek method: ', () => {


            it('Should peek the top item of a stack', () => {
                let s = new Stack();
                s.push(321);

                let actual = s.peek();
                let expected = 321;

                expect(actual).toEqual(expected);
            });

            it('Should throw an error when attempting to peek the top of an empty stack', () => {
                let s = new Stack();

                let actual = () => {
                    s.peek();
                };

                expect(actual).toThrow('Can\'t peek an empty stack!')
            });

        });


        describe('Testing the isEmpty method: ', () => {


            it('Should return true when the stack is empty', () => {
                let s = new Stack();

                let actual = s.isEmpty();
                let expected = true;

                expect(actual).toEqual(expected);
            });

            it('Should return false when the stack has items', () => {
                let s = new Stack();
                s.push(123);

                let actual = s.isEmpty();
                let expected = false;

                expect(actual).toEqual(expected);

            });
        });

    });

});


describe('Testing Challenge 11: Pseudo Queue: ', () => {


    describe('Testing the enqueue method: ', () => {

        it('Should enqueue one item', () => {

            let q = new PseudoQueue();
            q.enqueue(1);

            let actual = q.storage1.peek();
            let expected = 1;

            expect(actual).toEqual(expected);

        });

        it('Should enqueue multiple items', () => {
            let q = new PseudoQueue();
            q.enqueue(1);
            q.enqueue(2);
            q.enqueue(3);

            let actual = q.storage1.peek()
            let expected = 3;

            expect(actual).toEqual(expected);
        });

    });

    describe('Testing the dequeue method: ', () => {

        it('Should dequeue one item', () => {
            let q = new PseudoQueue();
            q.enqueue(1);
            let actual = q.storage1.peek();
            let expected = 1;

            expect(actual).toEqual(expected);

            q.dequeue();

            actual = () => {
                q.storage1.peek();

            }
            expected = 'Can\'t peek an empty stack!';

            expect(actual).toThrow(expected);


        });

        it('Should dequeue multiple items', () => {
            let q = new PseudoQueue();
            q.enqueue(1);
            q.enqueue(2);
            q.enqueue(3);

            let actual = q.storage1.peek();
            let expected = 3;

            expect(actual).toEqual(expected);

            q.dequeue();
            q.dequeue();

            actual = q.storage1.peek();
            expected = 3;

            expect(actual).toEqual(expected);

        });

    });

});
