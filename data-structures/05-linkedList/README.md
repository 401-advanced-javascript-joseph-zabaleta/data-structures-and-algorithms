# Singly Linked List
[Table of Contents](../../README.md)

[Link to the Code](./linked-list.js)

---

## Challenge 05

- Create a Node Class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
    - Define a method called `insert` which takes any value as an argument and adds a new node with that value to the `head` of the list with an O(1) Time performance.
    - Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node's value somewhere within the list.
    - Define a method called `toString` which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
        - `"{a}->{b}->{c}->{NULL}"`
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods your wrote for this lab.

---

## Approach & Efficiency
There were three methods required to start this linked list implementation. First was the insert, this method is O(1) operation as it creates a new node, and places it at the front of our list be re-assigning the head. Next was includes this want resulted in an O(n) it has a while loop involved and will go from start to end in search of a value, so the worst case could be that the value is not inside. Last was toString another O(n) method. This will always go through the entire list and make a string representation of it.

---

## API
- `insert(value)`:
    - O(1)
    - Creates a new node and adds it to the head of the linked list
- `includes(value)`:
    - O(n)
    - Searches the values within the linked list for the provided value
- `toString()`:
    - O(n)
    - Overrides the default toString() method and returns a string representing all the items in the linked list.

