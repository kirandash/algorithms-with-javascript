//Task: Transform this simple sorting algorithm into a unique sort. 
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]


/*
Breadcrumb Approach with additional array
TC: O(n)
SC: O(2n)
*/
const uniqSort = function(arr) {
    const breadcrumbs = {};
    var result = []; // Note: we are creating a new array. So this is a trade off with space complexity
    // we could think of improving this by using only one array

    // remove duplicates
    for(i = 0; i < arr.length; i++) {
        if(!breadcrumbs[arr[i]]){
            breadcrumbs[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    return result.sort((a, b) => a - b); // ascending sort
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]

/*
Breadcrumb Approach with Object.entries
TC: O(n)
SC: O(n)
*/
const uniqSort2 = function(arr) {
    const breadcrumbs = {};
    for(let i = 0; i < arr.length; i++){
      breadcrumbs[arr[i]] = true;
    }
    arr = Object.keys(breadcrumbs);
    
    return arr.sort((a, b) => a - b);
  };
  
  console.log(uniqSort2([4,2,2,3,2,2,2])); // => [2,3,4]
