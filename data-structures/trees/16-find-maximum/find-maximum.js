'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = left;
    };
};


class BinaryTree {
    constructor(root = null) {
        this.root = root;
    };


    preOrder() {
        let collection = [];

        function walk(root) {

            if (!root) {
                return;
            };

            collection.push(root.value);
            walk(root.left);
            walk(root.right);
        };


        walk(this.root);

        return collection;

    }


    inOrder() {
        let collection = [];

        function walk(root) {

            if (!root) {
                return;
            }

            walk(root.left);
            collection.push(root.value);
            walk(root.right);

        };

        walk(this.root);

        return collection;
    }


    postOrder() {
        let collection = [];

        function walk(root) {

            if (!root) {
                return;
            };

            walk(root.left);
            walk(root.right);
            collection.push(root.value);

        };

        walk(this.root);

        return collection;
    };
};


class BinarySearchTree extends BinaryTree {
    constructor() {
        super();
    };


    add(value) {
        let node = new Node(value);

        if (!this.root) {
            this.root = node;
            return;
        };


        function walk(root, newNode) {


            if (newNode.value < root.value) {

                if (!root.left) {
                    root.left = newNode;
                } else {
                    walk(root.left, newNode);
                };

            } else {

                if (!root.right) {
                    root.right = newNode;
                } else {
                    walk(root.right, newNode);
                };

            };
        };

        walk(this.root, node);


    }


    contains(value) {

        if (this.preOrder().includes(value)) {
            return true;
        } else {
            return false;
        };

    };


    findMaximum() {

        if (!this.root) throw new Error('Error! Empty Tree!');

        let maximum = 0;

        function walk(root) {

            if (!root) return;

            if (root.value > maximum) {
                maximum = root.value;
            };

            walk(root.left);
            walk(root.right);

        };

        walk(this.root);

        return maximum;
    };
};

module.exports = BinarySearchTree;
