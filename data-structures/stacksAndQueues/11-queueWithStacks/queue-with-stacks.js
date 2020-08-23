'use strict';

/**
 * Node class handles the packaging of values
 * @class
 */
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    };
};

/**
 * Stack class Data structure
 * @class
 */
class Stack {
    constructor( item = null ) {
        this.top = item;
    };

    /**
     * Takes in any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
     * @param {*} value
     */
    push(value) {

        // let newNode = new Node(value);

        if (this.top !== null) {
            let newNode = new Node(value, this.top);
            this.top = newNode;
        } else {
            let newNode = new Node(value);
            this.top = newNode;
        };

    };


    /**
     * Takes no arguments, removes the node from the top of the stack, and returns the node's value.
     *
     * Will raise an exception when called on an empty stack.
     */
    pop() {

        if (!this.top) {
            throw Error('Can\'t pop from an empty stack!')
        };

        let output = this.top;
        this.top = this.top.next;
        output.next = null;


        return output.value;

    };


    /**
     * Takes no arguments and returns the value of the node located on top of the stack, without removing it from the stack.
     */
    peek() {

        if (!this.top) {
            throw Error('Can\'t peek an empty stack!')
        };

        return this.top.value;
    };


    /**
     * Takes no arguments, and returns a boolean indicating whether or not the stack is empty.
     */
    isEmpty() {
        return !Boolean(this.top);
    };

}

/**
 * PsuedoQueue that utilizes two stacks internally manage the queue.
 * @class
 */
class PseudoQueue {

    constructor() {
        this.storage1 = new Stack();
        this.storage2 = new Stack();
    };

    /**
     * Takes any value as an argument and adds a new node with that value to the back of the queue
     * @param {*} value
     */
    enqueue(value) {
        this.storage1.push(value);
    };


    /**
     * Takes no Arguments, removes the node from the front of the queue.
     */
    dequeue() {

        let current = this.storage1.top;

        while (current) {
            this.storage2.push(current.value);
            current = current.next;
        };

        this.storage2.pop();

        this.storage1 = new Stack();

        current = this.storage2.top;

        while (current) {
            this.storage1.push(current.value);
            current = current.next;
        };

        this.storage2 = new Stack();

    };


}

module.exports = { Node, Stack, PseudoQueue };
