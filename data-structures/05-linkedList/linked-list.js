'use strict';
/**
 * Node class handles the packaging of values
 * @class
 */
class Node {
    constructor(value, next= null){
        this.value = value;
        this.next = next;
    };
};

/**
 * LinkedList creates an implementation of the linked list data structure.
 * @class
 */
class LinkedList {
    constructor(){
        this.head = null;
    };

    /**
     * Creates a new node and adds it to the linked list
     * @param {*} value - Can be any data type
     */
    insert(value) {
        this.head = new Node(value, this.head);
    };

    /**
     * Searches the values within the linked list for the provided value
     * @param {*} value Search value to be found
     * @returns Boolean True if found otherwise false
     */
    includes(value) {
        let current = this.head;

        while (current) {
            if (current.value == value) {
                return true;
            };

            current = current.next;
        };

        return false;
    };

    /**
     * Overrides the default toString() method
     * @returns a string representating all the items in the linked list
     */
    toString() {
        let output = '';
        let current = this.head;

        while (current) {
            output += `{${current.value}} -> `;
            current = current.next;
        };

        return output + 'NULL';
    };

};

module.exports = LinkedList;

