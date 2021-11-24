// Task 1: Without peeking, write your own recursive factorial method

const factorial =  (num) => {
    if(num === 1) {
        return num
    } else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5));
console.log(factorial(6));

// Task 2: Use your memo function from the previous exercise to memoize your factorial method
const memoize = (cb)  => {
    let cache = {};

    return (n, ...args) => {
        if(n in cache) {
            console.log("getting data from cache",  n);
            return cache[n];
        } else {
            console.log("calculating since no cache",  n);
            const result = cb(n, ...args);
            cache[n] = result;
            return result;
        }
    }
}

const memoizeFactorial = memoize(factorial);

console.log(memoizeFactorial(5)); // Calculated
console.log(memoizeFactorial(5)); // Memoized
console.log(memoizeFactorial(6)); // Calculated

// THIS SOLUTION MEMOIZES ONLY THE FIRST CALL