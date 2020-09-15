# Quick Sort
Quick sort is a dvide and conquer algorithm. It picks an element as a pivot and partitions the list around the pivot. This can be accomplished several different ways. In this example the pivot will be the last element in the list.

Checkout official README: [README Link](./README.md)

---

## Pseudocode
![code](/assets/quick_sort/pseudo_code.png)

---

## Trace
 Sample Array: `[8,4,23,42,16,15]`

### Pass 1:
![pass 1](/assets/quick_sort/pass_1.png)

Quick sort is mainly focused around the partition function inside. In this illustration above I have drawn the flow of the function. First we have the invocation of quicksort. Second we need to define a pivot variable, and we are calling the partition function. This function is doing all the work. Inside this function we have a for loop, that will loop for the length of the list, and will swap current index with the next index based on value.

---

### Pass 2:
![pass 2](/assets/quick_sort/pass_2.png)

Once the for loop has completed, we have keeping track of the low value. We now enter function 4, which is the last function inside partition. We do the same process now swapping the right of the pivot. Once complete, we hit the return block for position returning an integer.

This problem is rather long and a lot of steps. After the initial position has been deteremined, we use that value to begin the real sorting part. We execute a sort left and sort right with Recursion. This will repeat the process.

Inside partition, we loop through the array and compare each value to he pivot and swap if the current value is smaller than the pivot.

---

### Summary
- Utilizes the divide and conquer paradigm
- Split the incoming array into two sub arrays and sort them individually by recursiving calling the quicksort method.
- After sort, combine the sub arrays back to into one sorted array


## Efficency
* Time O(n^2)
- The basic algorithm for Quick Sort is to partition the list based ona pivot value, and utilizing recursion to break this list down sorting smaller numbers to the left of the pivot and larger numbers to the right. First time through a position is deteremined, and then recursion on main function is called to sort the left then the right based on exact pivot location. This will result in a O(n) performance as we are touching each part, utilzing a for loop.
* Space O(n)
    - The space can vary based on the type of quick sort used, in this version of quick sort we have a set pivot over a random pivot. Now the best space complexity still is O(n) as the fixed pivot could be the lowest number.
