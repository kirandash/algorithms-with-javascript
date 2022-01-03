// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25

// Greedy Approach: Sort the coins and Always subtract the largest coin possible from  the current amount
const makeChange = (coins, amount) => {
  // sort the coins
  coins.sort((a, b) => b - a);
  let coinTotal = 0;
  let i = 0;
  while (amount > 0) {
    if (coins[i] <= amount) {
      // Always subtract the largest coin possible from  the current amount
      amount -= coins[i];
      coinTotal++;
    } else {
      i++;
    }
  }
  return coinTotal;
};

// The above solution will work for  the following  cases.
console.log(makeChange([5, 10, 25], 50));
console.log(makeChange([5, 10, 25], 40));
console.log(makeChange([5, 10, 25], 35));

// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10)

// The above solution won't work for this case
console.log(makeChange([1,6,10], 12)); // output should be 2 (6 + 6) but we are receiving 3 (10, 1, 1)
