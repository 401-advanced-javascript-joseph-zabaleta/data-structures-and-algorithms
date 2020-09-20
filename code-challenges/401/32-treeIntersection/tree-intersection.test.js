'use strict';

const BinarySearchTree = require('../../../data-structures/trees/17-breadth-first/breadth-first.js').BinarySearchTree;
const treeIntersection = require('./tree-intersection.js');


describe('Testing Challenge 32: Tree intersection', () => {

    it.only('Should handle example #1', () => {

        let tree1 = new BinarySearchTree();
        tree1.add(150);
        tree1.add(100);
        tree1.add(250);
        tree1.add(75);
        tree1.add(160);
        tree1.add(200);
        tree1.add(350);
        tree1.add(125);
        tree1.add(175);
        tree1.add(300);
        tree1.add(500);

        let tree2 = new BinarySearchTree();
        tree2.add(42);
        tree2.add(100);
        tree2.add(600);
        tree2.add(15);
        tree2.add(160);
        tree2.add(200);
        tree2.add(350);
        tree2.add(125);
        tree2.add(175);
        tree2.add(4);
        tree2.add(500);

        let actual = treeIntersection(tree1, tree2);
        let expected = [100, 160, 200, 350, 125, 175, 500]

        expect(actual).toEqual(expected);

    });


    it('Should handle example #2', () => {

        let tree1 = new BinarySearchTree();
        tree1.add(100);

        let tree2 = new BinarySearchTree();
        tree2.add(100);

        let actual = treeIntersection(tree1, tree2);
        let expected = [100]

        expect(actual).toEqual(expected);

    });


    it('Should handle example #3', () => {

        let tree1 = new BinarySearchTree();
        tree1.add(100);
        tree1.add(23);
        tree1.add(55);


        let tree2 = new BinarySearchTree();
        tree2.add(77);
        tree2.add(5);
        tree2.add(27);

        let actual = treeIntersection(tree1, tree2);
        let expected = []

        expect(actual).toEqual(expected);

    });

});
