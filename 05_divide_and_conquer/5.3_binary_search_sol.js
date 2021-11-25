// TASK: Implement binary search.

function binarySearch(list, item) {
    // set initial min and max at start and end of array
    var min = 0;
    var max = list.length;

    while(min <= max) {
        // start guess from center
        var guess = Math.floor((min + max) / 2);

        // if val at guess matches item, return index
        if(list[guess] === item) {
            return guess;
        } else {
            // if val at guess is less than item move min next to guess
            if(list[guess] < item){
                min = guess + 1;
            } else {
                // if val at guess is higher than item move max before guess
                max = guess - 1;
            }
        }
    }

    return -1; // not found
}

console.log(binarySearch([2,6,7,90,103], 90));
console.log(binarySearch([2,6,7,9220,103], 90));
console.log(binarySearch([2,6,7,103,90], 90));