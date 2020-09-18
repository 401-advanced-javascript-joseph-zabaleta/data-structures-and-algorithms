'use strict';

class Node {

    constructor(value, next = null) {

        this.value = value;
        this.next = next;
    };

};


class LinkedList {

    constructor() {

        this.head = null;

    };


    add(value) {

        this.head = new Node(value, this.head);

    };


    display() {

        let collection = [];
        let current = this.head;

        while (current) {

            collection.push(current.value);
            current = current.next;

        };

        return collection;

    };

}

class Hashtable {

    constructor(size = 1024) {

        this.size = size;
        this.map = new Array(size);

    };


    /**
     * Add is reponsible for adding data to the hashtable
     * @param {*} key
     * @param {*} value
     */
    add(key, value) {

        let hashedKey = this.hash(key);

        if (!this.map[hashedKey]) {

            this.map[hashedKey] = new LinkedList();

        };


        this.map[hashedKey].add([key, value])

    };


    /**
     * Get is responsible for taking in a key argument and returning the value for that key in the hashtable
     * @param {*} key
     */
    get(key) {

        let index = this.hash(key);

        console.log('index ', index);

        if (this.map[index]) {

            console.log('im in')

            let ll = this.map[index];
            let current = ll.head;

            while (current) {

                if (current.value[0] === key) {

                    return current.value[1];

                } else {

                    current = current.next;

                };

            }

        }

        return null;

    };


    /**
     * Contains is reponsible for returning a bool for wether or not the provided key is within the data structure
     * @param {*} key
     * @returns {boolean} Boolean
     */
    contains(key) {

        let index = this.hash(key);

        if (this.map[index]) {

            let collection = this.map[index].display();

            for (let i = 0; i < collection.length; i++) {

                if (collection[i][0] === key) {

                    return true;

                };

            };

        };

        return false;

    };


    /**
     * Hash is responsible for splitting they key, converting to ascii values, adding them together, multiply it by any prime number, then modulous by the size of the hashtable to return a valid index value within the hashtable to store that key.
     * @param {*} key
     * @returns {number} Index value to store the data at within the hashtable
     */
    hash(key) {

        let total = 0;

        // key.forEach(char => {

        //     total += char.charCodeAt();

        // });

        for (let char of key) {

            total += char.charCodeAt();

        };


        total *= 19;

        return total % this.size;

    };

}


module.exports = Hashtable;
