# Trees
[Table of Contents](../../../README.md)

[Link to the Code](./trees.js)

---

## Challenge 15
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
    - Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- Create a BinarySearchTree class
    - Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
    - Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

---

## Approach & Efficiency
The current implementation of recursion will result in O(n^2). We continuing to call a function for each node and then for each of its children. This is not the most efficient way to accomplish the task but its the most common. Space , we are creating collections which are just arrays the size of the whole tree, O(n).

---

## API
### Binary Tree (Super Class)
`pre_order()`: This is a Depth First traversal method. It prioritizes printing the `root` first, then looks to print `left` if left is not `None`, and lastly looks `right`.

`in_order()`: This is a Depth First traversal method. It prioritizes printing the `left` first, then prints the `root`, and lastly looks to print `right`.

`post_order()`: This is a Depth First traversal method. It prioritizes print the `left` first, then looks to print the `right` and lastly prints the `root`.

### BinarySearchTree
`add(value)`: This will add a new element to the tree, based on a tradtional binary search tree condtional. If value is smaller than the root it will be added to the left, else add to the right.

`contains(value)`: This searches the tree in order to verify that a given value exists in the tree. Returns a boolean value.
