# Insertion Sort
[Table of Contents](../../../README.md)

[Link to the Code](./insertion-sort.js)

Checkout the blog here: [Blog Link](./BLOG.md)

---

## Challenge 26
Based on this pseudo code below make a blog walking through the code. Then create a working solution with tests.

```
    insertionSort(int[] arr)

    FOR i = 1 to arr.length

        int j <--i-1

        int temp <--arr[i]

        WHILE j >= 0 AND temp < >arr[j]
            arr[j + 1] <-- arr[j]
            j <-- j - 1

        arr[j + 1]<-- temp
```
---

## Approach & Efficiency
This functions basic operations is to compare each index of a list and re-order them based on value. In order to do this we start off with a for loop, O(N). We loop through a the range of the inputed list and for each one we check to see if a condition is met for a while loop. This while loop can run O(n) times as it will continue to move a value as long as its the smaller value in the comparision. This results in O(n^2) time. Space is never change, leaving us with O(1) as the list is changed in place, and no new space is required.

---

## Solution

Checkout the blog for a solution: [Blog Link](./BLOG.md)
