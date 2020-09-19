# Quick Sort
[Table of Contents](../../../README.md)

[Link to the Code](./merge-sort.js)

Checkout the blog here: [Blog Link](./BLOG.md)

---

## Challenge 27
Based on this pseudo code below make a blog walking through the code. Then create a working solution with tests.

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```


---

## Approach & Efficiency
Time O(n)

The basic algorithm for Quick Sort is to partition the list based ona pivot value, and utilizing recursion to break this list down sorting smaller numbers to the left of the pivot and larger numbers to the right. First time through a position is deteremined, and then recursion on main function is called to sort the left then the right based on exact pivot location. This will result in a O(n) performance as we are touching each part, utilzing a for loop.

Space O(n)

The space can vary based on the type of quick sort used, in this version of quick sort we have a set pivot over a random pivot. Now the best space complexity still is O(n) as the fixed pivot could be the lowest number.

---

## Solution

Checkout the blog for a solution: [Blog Link](./BLOG.md)
