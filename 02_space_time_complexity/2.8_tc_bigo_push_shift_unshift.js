var myList = ["hello", "hola"];

myList.push("bonjour"); // O(1)

myList.shift(); // O(1)

myList.unshift(); // O(n)


//calculate the time complexity for the 
//native methods above (separately)

// Answer: push and shift is O(1)
// Unshift is O(n) - because after taking out first item, all the elements will have to readjust their position
