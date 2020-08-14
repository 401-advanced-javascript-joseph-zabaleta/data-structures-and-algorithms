'use strict';

const LinkedList = require('./linked-list.js');

describe('Testing Challenge 05 Singly LinkedLists', () => {

    it('Should return a string representation of itself', () => {
        let ll = new LinkedList();
        ll.insert(1);

        let actual = ll.toString();
        let expected = '{1} -> NULL';

        expect(actual).toEqual(expected);

    });

    it('Should instantiate a linked list with no items', () => {
        let ll = new LinkedList();
        let actual = ll.head;

        expect(actual).toBeNull();
    });


    it('Should insert a value into the LinkedList', () => {
        let ll = new LinkedList();
        ll.insert('pizza');
        let actual = ll.head.value;
        let expected = 'pizza';

        expect(actual).toEqual(expected);
    });

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
