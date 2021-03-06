'use strict';

const {LinkedList, zipLists} = require('./ll-zip.js');


describe('Testing Challenge 06 Singly LinkedLists', () => {

    it('Should instantiate a linked list with no items', () => {
        let ll = new LinkedList();
        let actual = ll.head;

        expect(actual).toBeNull();
    });

    describe('Testing toString method', () => {

        it('Should return a string representation of itself', () => {
            let ll = new LinkedList();
            ll.insert(1);

            let actual = ll.toString();
            let expected = '{1} -> NULL';

            expect(actual).toEqual(expected);

        });

    });

    describe('Testing insert method', () => {

        it('Should add a value into the LinkedList', () => {
            let ll = new LinkedList();
            ll.insert('pizza');

            let actual = ll.head.value;
            let expected = 'pizza';

            expect(actual).toEqual(expected);
        });

        it('Should add multiple nodes to the end of a linked list', () => {
            let ll = new LinkedList();
            ll.insert('pizza');
            ll.insert('ice cream');
            ll.insert(5)

            let actual = ll.toString();
            let expected = '{5} -> {ice cream} -> {pizza} -> NULL';

            expect(actual).toEqual(expected);
        });

    });

    describe('Testing include method', () => {

        it('Should return true if a LinkedList includes a value', () => {
            let ll = new LinkedList();
            ll.insert('a');
            ll.insert('b');
            ll.insert('c');

            let actual = ll.includes('c');

            expect(actual).toBeTruthy();
        });

        it('Should return false if a LinkedList includes a value', () => {
            let ll = new LinkedList();
            ll.insert('a');
            ll.insert('b');
            ll.insert('c');

            let actual = ll.includes('d');

            expect(actual).toBeFalsy();
        });

    });

    describe('Testing insertBefore method', () => {

        it('Should insert a node before the head of a linked list', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(3);
            ll.insert(1);
            ll.insertBefore(1, 5);

            let actual = ll.toString();
            let expected = '{5} -> {1} -> {3} -> {2} -> NULL'

            expect(actual).toEqual(expected);

        });

        it('Should insert a node before a node located in the middle of a linked list', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(3);
            ll.insert(1);
            ll.insertBefore(3,5);

            let actual = ll.toString();
            let expected = '{1} -> {5} -> {3} -> {2} -> NULL'

            expect(actual).toEqual(expected);
        });

        it('Should raise an error when attempting to insert before a value not found', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(3);
            ll.insert(1);

            let actual = () => {
                ll.insertBefore(4,5);
            }
            let expected = 'Value Error! Can\'t add a value before a value that does not exist.'

            expect(actual).toThrow(expected);
        });

        it('Should raise an error when attempting to insert before an empty linked list', () => {
            let ll = new LinkedList();
            let actual = () => {
                ll.insertBefore(4,5);
            }
            let expected = 'Value Error! Can\'t add a value before a value that does not exist.'

            expect(actual).toThrow(expected);
        });

    });

    describe('Testing append method', () => {

        it('Should append to an empty linked list', () => {
            let ll = new LinkedList();
            ll.append(1);

            let actual = ll.toString();
            let expected = '{1} -> NULL'

            expect(actual).toEqual(expected);

        });

        it('Should append to the end of linked list', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(3);
            ll.insert(1);
            ll.append(5);


            let actual = ll.toString();
            let expected = '{1} -> {3} -> {2} -> {5} -> NULL'

            expect(actual).toEqual(expected);
        });

    });

    describe('Testing insertAfter method', () => {

        it('Should raise an error when attempting to insert after an empty linked list', () => {
            let ll = new LinkedList();

            let actual = () => {
                ll.insertAfter(3, 5);
            };
            let expected = 'Value Error! Can\'t add a value after a value that does not exist.'

            expect(actual).toThrow(expected);
        });

        it('Should insert after given value within the linked list Test 1', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(3);
            ll.insert(1);
            ll.insertAfter(3,5);

            let actual = ll.toString();
            let expected = '{1} -> {3} -> {5} -> {2} -> NULL';

            expect(actual).toEqual(expected);
        });

        it('Should insert after given value within the linked list Test 2', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(2);
            ll.insert(1);
            ll.insertAfter(2,5);

            let actual = ll.toString();
            let expected = '{1} -> {2} -> {5} -> {2} -> NULL';

            expect(actual).toEqual(expected);
        });

    });
});


describe('Testing Challenge 07 Singly LinkedLists: Insertions', () => {

    describe('Testing kthFromEnd method', () => {

        it('Should find follow the "Happy Path" where k is in the middle', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(8);
            ll.insert(3);
            ll.insert(1);

            let actual = ll.kthFromEnd(2);
            let expected = 3;

            expect(actual).toEqual(expected);
        });

        it('Should handle a k value of zero', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(8);
            ll.insert(3);
            ll.insert(1);

            let actual = ll.kthFromEnd(0);
            let expected = 2;

            expect(actual).toEqual(expected);
        });

        it('Should handle when k is not a positive integer', () => {
            let ll = new LinkedList();
            ll.insert(2);
            ll.insert(3);
            ll.insert(1);

            let actual = () => {
                ll.kthFromEnd(-1);
            };

            let expected = 'Value Error! Can\'t find a value from end of a linked list with a negative number.'

            expect(actual).toThrow(expected);

        });

        it('Should handle when a linked list is the size of 1', () => {
            let ll = new LinkedList();
            ll.insert(5);

            let actual = ll.kthFromEnd(1);
            let expected = 5;

            expect(actual).toEqual(expected);
        });

        it('Should handle when k is greater than the length of the linked list', () => {
            let ll = new LinkedList();
            ll.insert(5);
            ll.insert(10);
            ll.insert(15);

            let actual = () => {
                ll.kthFromEnd(5);
            };

            let expected = 'Value Error! Input K is longer than the linked list.'

            expect(actual).toThrow(expected);
        });
    });

});

describe('Testing Challenge 08 Singly LinkedLists: Zip', () => {

    it('Should hanlde when list1 is empty', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();

        list2.insert(4);
        list2.insert(3);
        list2.insert(5);

        let zipped = zipLists(list1, list2);

        let actual = zipped.toString();
        let expected = '{5} -> {3} -> {4} -> NULL';

        expect(actual).toEqual(expected);
    });

    it('Should handle when list2 is empty', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.insert(1);
        list1.insert(2);
        list1.insert(3);

        let zipped = zipLists(list1, list2);


        let actual = zipped.toString();
        let expected = '{3} -> {2} -> {1} -> NULL'

        expect(actual).toEqual(expected);
    });

    it('Should handle two equal length lists', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.insert(1);
        list1.insert(2);
        list1.insert(3);

        list2.insert(6);
        list2.insert(7);
        list2.insert(8);

        let zipped = zipLists(list1, list2);

        let actual = zipped.toString();
        let expected = '{3} -> {8} -> {2} -> {7} -> {1} -> {6} -> NULL';

        expect(actual).toEqual(expected);
    });


    it('Should handle when list1 is shorter than list2', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.insert(1);
        list1.insert(3);

        list2.insert(6);
        list2.insert(7);
        list2.insert(8);
        list2.insert(9)

        let zipped = zipLists(list1, list2);

        let actual = zipped.toString();
        let expected = '{3} -> {9} -> {1} -> {8} -> {7} -> {6} -> NULL';

        expect(actual).toEqual(expected);
    });

    it('Should handle when list1 is longer than list2', () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.insert(1);
        list1.insert(3);
        list1.insert(6);
        list1.insert(9)

        list2.insert(7);
        list2.insert(8);

        let zipped = zipLists(list1, list2);

        let actual = zipped.toString();
        let expected = '{9} -> {8} -> {6} -> {7} -> {3} -> {1} -> NULL';

        expect(actual).toEqual(expected);
    });

});
