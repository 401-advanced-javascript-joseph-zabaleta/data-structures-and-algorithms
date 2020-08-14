# Linked List Insertions

[Table of Contents](../../../README.md)

[Link to the Code](./linked-list.js)

## Challenge 06
Extending the `LinkedList` class from Challenge 05. Adding three new methods:
- `.append(value)`: which adds a new node with the given `value` to the end of the list
- `insertBefore(value, newVal)`: which add a new node with the given `newValue` immediately before the first `value` node.
- `insertAfter(value, newVal)`: which add a new node with the given `newValue` immediately after the first `value` node.


---

### Example:

- `.append(value)`

| Input | Args | Output |
| ----- | ------ | ------ |
| `head -> [1] -> [3] -> [2] -> X` | `5` | `head -> [1] -> [3] -> [2] -> [5] -> X` |
| `head -> X` | `1` | `head -> [1] -> X` |

---

- `insertBefore(value, newVal)`

| Input | Args | Output |
| ----- | ------ | ------ |
| `head -> [1] -> [3] -> [2] -> X` | `3, 5` | `head -> [1] -> [5] -> [3] -> [2] -> X` |
| `head -> [1] -> [3] -> [2] -> X` | `1, 5` | `head -> [5] -> [1] -> [3] -> [2] -> X` |
| `head -> [1] -> [2] -> [2] -> X` | `2, 5` | `head -> [1] -> [5] -> [2] -> [2] -> X` |
| `head -> [1] -> [3] -> [2] -> X` | `4, 5` | `Exception` |

---

- `insertAfter(value, newVal)`

| Input | Args | Output |
| ----- | ------ | ------ |
| `head -> [1] -> [3] -> [2] -> X` | `3, 5` | `head -> [1] -> [3] -> [5] -> [2] -> X` |
| `head -> [1] -> [3] -> [2] -> X` | `2, 5` | `head -> [1] -> [3] -> [2] -> [5] -> X` |
| `head -> [1] -> [2] -> [2] -> X` | `2, 5` | `head -> [1] -> [2] -> [5] -> [2] -> X` |
| `head -> [1] -> [3] -> [2] -> X` | `4, 5` | `Exception` |

---

## Approach & Efficiency
Extended the previous LinkedList to have three new methods. The first , `append(value)`, It will be O(n) as it while loops over the whole list to the end. A second approach would be to keep track of the tail just like we track the head. This would result in O(1). Next two was `insertBefore`/`insertAfter` Both utilize while loop ending in an O(n) time as the value to insert after/before could be the last node.

---

## Solution
![White Board Image]()
