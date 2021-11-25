// TASK: Implement linear search.

function linearSearch(list, item) {
    for(key in list) {
        if(list[key] === item) return key // return index if found
    }
    return -1;  // return -1 if not found
}

// Time complexity: o(n)
// This solution will return the first occurence
console.log(linearSearch([2,6,7,90,103, 90], 90));

// Approach 2
function linearSearch2(list, item) {
    var index = -1; // if result not found
    list.forEach((listItem, i) => {
        if(listItem === item) {
            index = i;
        }
    })

    return index;
}

// This solution will return the first occurence
console.log(linearSearch2([2,6,7,90,103, 90], 90));
