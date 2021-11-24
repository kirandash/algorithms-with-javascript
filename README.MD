# A Practical Guide to Algorithms with JavaScript

## 1. Intro
### 1.1 Intro
- Slides: https://slides.com/bgando/intro-to-algorithms/
- **Topics** to cover:

    1. Estimate generally how fast an algorithm is.

    2. Use some techniques to optimize certain types of algorithms.

    3. Get comfortable with recursion.

    4. Implement a couple sorting and searching algorithms.

    5. Understand the difference between Divide & Conquer and Dynamic Programming.

    6. Learn about the pros and cons of the Greedy technique.

    7. Cover a recursive brute force algorithm.

## 2. Space and time complexity
### 2.1 Introducing Space & Time Complexity
- Speed of code can not be measured in seconds because speed depends on many factors like the machine and the language etc
- So speed is measured in:
    - **Space** complexity:
        - How much **memory** is used?
    - **Time** complexity:
        - How many primitive **operations** are executed?
    - ...with respect to input size
    - ...and assuming worst case scenarios
- Ex: Given a list of hotels, return the price range of hotels in a given search result.
    - Solutions:
        - compare all numbers: n^2 (quadratic)
        - Find min and max numbers: 2n (linear)
        - Sorted list, find first and last: 2 (constant)
- Popular Big-O names:
    - constant O(1), logarithmic O(logn), linear O(n), quardratic O(n^2), exponential O(k^n)

### 2.2 Native Methods & JavaScript
- native methods/expressions/operations
    - array.pop(): constant
    - array[0]: constant
    - obj.a: constant
    - shift and unshift for array: linear since we have to move all the elements at least once
    - reduce: linear
    - sort: O(nlogn)

### 2.3 Big O Notation
- **Calculating Time**
    - What do we do if we have multiple expressions/loops/etc?
        - 1 + 1 + 1 (add if multiple expression)
        - n * n * n (multiply if loop)
    - what about O(logn)
        - as input size increases, time complexity increases in fraction or relatively slowly
        - log base is 10 or 2. base 2 means dividing  by 2 and base 10 is dividing by 10.
        - typically we will see base 2 ex: binary search
    - O(nlogn)
        - loop with linear and then cutting it in half
- **Complexity of Common Operations**
    -   | Complexity        | Operation           | 
        | ------------- |:-------------:|
        | O(1)     | Running a statement  |
        | O(1)      | 	Value look-up on an array, object, variable      |
        | O(logn) | Loop that cuts problem in half every iteration      |
        | O(n) | Looping through the values of an array      |
        | O(n^2) | Double nested loops      |
        | O(n^3) | Triple nested loops      |

### 2.4 Space complexity
- Space complexity is measured based on how much memory are we using to perform our operation
- Ex: in our loop if we are creating a fresh copy of array every time then we are consuming space
- So, 3 array copies takes more space than 1 array

### 2.5 Review
- Time complexity of an algorithm signifies the total time required by the program to run to completion. 
- The time complexity of algorithms is most commonly expressed using the **big O** notation.
- Big O notation gives us an industry-standard language to discuss the performance of algorithms. Not knowing how to speak this language can make you stand out as an inexperienced programmer.
- Did you know there are other notations that are typically used in academic settings? Learn more here: https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/
- The complexity differs depending on the input data, but we tend to weigh the worst-case.
- We graph the performance of our algorithms with one axis being the amount of data, normally denoted by 'n' and the other axis being the amount of time/space needed to execute completely.

### 2.6 Big O: Loop
- https://www.bigocheatsheet.com/
- O(n)

### 2.7 Big O: Property lookup
- O(1)
- property lookup ex: `str.length`
- JS is smart and it keeps track of length when an item is addd or removed
- so `str.length` is basically a property lookup and not a loop running

### 2.8 Big O: Push, shift and unshift
- push and shift is O(1)
- Unshift is O(n) - because after taking out first item, all the elements will have to readjust their position

## 3. Optimization with Caching
### 3.1 Faster Algorithms - Unique array
- Ex: create a fn to check if an array is unique or not
    - O(n^2) with multiple loops
    - O(n) with breadcrumb approach (Store array item as indexes in breadcrumb object)

### 3.2 Unique Sort exercise
- we are creating a new array. So this is a trade off with space complexity
- we could think of improving this by using only one array
- O(n)

### 3.3 Caching with memoization
- Caching: Saving value into an object or array
- **Memoization**: Caching the value that a function returns
```
const factorial = (n) => {
    // Calculations: n * (n-1) * (n-2) * ... (2) * (1)
    return factorial;
}

factorial(35);

factorial(36); // factorial(36) = factorial(35) * 36;
```

### 3.4 Basic Memoization exercies
- if key in cache return cache
- else run the fn and save it in cache
- this solution has cache object in global scope

### 3.5 Memization with Closure
- We will use closure to clean up global variable
- **closure**: fn that returns another fn
    - allows us to create private variables
    - fn is created once
    - called multiple times

### 3.6 Generic Memoize Function
- Make our memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.
- Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

### 3.7 Reviewing Optimization
- Note: Optimizing doesn't improve time complexity in the above examples. So they are all O(1)
- But it will help us if the calculation is heavy and resource consuming
- In JS: a hash table is basically an object. So optimizing with hash table means saving data in object

## 4 Recursion

### 4.1 Introducing Recursion
- Recursion is simply when a function calls itself; however it doesn't stop there.
- WHY RECURSION?
    - 
    ```
    var callMe = function() {
        callMe();
        callMe();
        callMe("anytime");
    };
    ```
    - Elegant solutions to keep your code D.R.Y.
    - Expected CS knowledge

### 4.2 Call stack walkthrough
1. Push called Fn on stack.
2. Execute Fn body.
    - until...
        - ... another fn is called:
        -  Pause the current execution and start at step 1.
    - ... a return is hit:
        - Pop the current Fn off the stack.
        - Resume executing the previous Fn.

### 4.3 Looping with Recursion
- Recursion in 4 steps:
    - Identify base case(s).
    - Identify recursive case(s).
    - Return where appropriate.
    - Write procedures for each case that bring you closer to the base case(s).
- 
    ```
    var callMyself = function() {
        if() {
            // base case
            return;
        } else {
            // recursive case
            callMyself();
        }
            
        return;
    };
- Recursion can always be implemented as a loop, but in some situations, believe it or not, it is simpler to use recursion
- **Tail-Call Optimization**: 
    - ES6 offers TCO, which allows some functions to be called without growing the call stack.
    - https://262.ecma-international.org/6.0/#sec-tail-position-calls
    - https://2ality.com/2015/06/tail-call-optimization.html

### 4.4 Wrapper Functions
- **COMMON PATTERNS FOR RECURSION**
    - Wrapper Functions
    - Accumulators

### 4.5 Accumulators

### 4.6 Exercise - Convert Recusrion to Loop

### 4.7 Recursive Factorial & Memoize Exercise
- Do factorial recursively and memoize each result
- memoze + factorial
