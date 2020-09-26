'use strict';

const { Queue } = require('../../../data-structures/stacksAndQueues/10-stacksAndQueues/stacks-and-queues.js');

function treeIntersection(root1, root2) {

    let output = [];
    let collection1 = [];
    let collection2 = [];

    let tree1 = new Queue();
    tree1.enqueue(root1.root);


    while (!tree1.isEmpty()) {


        let front = tree1.dequeue();
        collection1.push(front.value);


        if (front.left) {
            tree1.enqueue(front.left);
        };

        if (front.right) {
            tree1.enqueue(front.right);
        };

    };

    let tree2 = new Queue();
    tree2.enqueue(root2.root);

    while (!tree2.isEmpty()) {

        let front = tree2.dequeue();
        collection2.push(front.value);

        if (front.left) {
            tree2.enqueue(front.left);
        };

        if (front.right) {
            tree2.enqueue(front.right);
        };

    };

    if (collection1.length > collection2.length) {

        for (let i = 0; i < collection2.length; i++) {

            if (collection1[i] === collection2[i]) {

                output.push(collection1[i]);

            };

        };

    } else {

        for (let i = 0; i < collection1.length; i++) {

            if (collection1[i] === collection2[i]) {

                output.push(collection1[i]);

            };

        };

    };


    return output;


};

module.exports = treeIntersection;
