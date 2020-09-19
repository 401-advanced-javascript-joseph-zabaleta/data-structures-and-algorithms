# Trees
[Table of Contents](../../README.md)

[Link to the Code](./hashtable.js)

---

## Challenge 30
This challenge covers the implementation of a hashmap, hashtable in javascript. It has the four methods of `add`, `get`, `contains`, and `hash`.

---

## Approach & Efficiency
Hashmap uses a list, and linkedlists to store data. It has four functions which are Add, Get, Contains, and Hash. When adding items to our hash map this is an O(1) operation unless there is a collision which can result in O(N) for the size of the bucket. When getting a key value, its the same, O(1) lookup time and returning value with O(N) if there was a collision at that key. Contains uses a LinkedList function that traverses the linkedlist at the given map location of our hashmap.

## API
- `add(key, value)`:
    - The add function is responsible for adding data to the hashmap.
    - This function consists of O(1) operations inside resulting in an O(1) add time complexity.
- `get(key)`:
    - This get function is responsible for returning the value for that key if it exists in the hashmap.
    - It has an initial O(1) lookup time, based on the hashed index value, but if there were any collisions, we encounter an O(N) on a collision.
- `contains(key)`:
    - This contains fucntion is responsible for returning a bool for whether or not the provided key is within the data structure.
    - During this function we are using a built in linked list function that creates a collection, which takes up O(N) space. This is mainly if the key we are looking up is stored in a bucket that has had a collision. If no collision, then the lookup time O(1).
- `hash(key)`:
    - This is responsible for taking in a key, and passing it through a little hashing algorithm. Its an O(N) for each character in the initial key. This will return an index value used for placing the key into the hashmap itself.

