var countChars = function(str){
    var count = 0; // O(1)

    for(var i = 0; i < str.length; i++) {
        count++; // O(n)
    }
    
    return count; // O(1)
};

countChars("dance");

countChars("walk");

// Answer
// The above problem has linear time complexity: O(n + 2) ~ O(n)
