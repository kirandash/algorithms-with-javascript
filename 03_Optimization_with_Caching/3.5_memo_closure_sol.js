const times10 = (n) => (n * 10);

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.
const memoizedClosure = () => {
  let cache = {};
	return (n) => {
		if (n in cache) {
			console.log('Fetching from cache:', n);
			return cache[n];
		}
		else {
			console.log('Calculating result');
			let result = times10(n);
			cache[n] = result;
			return result;
		}
	};
};

// returned function from memoizedAdd
const memoClosureTimes10 = memoizedClosure();
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
console.log('Task 3 cached value:', memoClosureTimes10(10));	// cached