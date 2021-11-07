var countChars = function(str){
    return str.length; // O(1) and O(1)
};

countChars("dance");

countChars("walk");


// How much more work would it take 
// to get the length of 1 million 
// char string?

// Answer
// The above problem has constant time complexity: O(1 + 1) ~ O(1)
// because JS is smart and it keeps track of length when an item is addd or removed
// so .length is basically a property lookup and not a loop running
