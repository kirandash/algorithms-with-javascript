const isUnique = (arr) => {
    var breadcrumb = {};
    var result = true;
    for(i=0; i < arr.length; i++) {
        console.log(`~~~~ LOOP ~~~~ i === ${i}`);
        if(breadcrumb[arr[i]]) {
            result = false;
        } else {
            // Store array item as indexes in breadcrumb object
            breadcrumb[arr[i]] = true;
        }
    }
    return result;
}

console.log("Array is unique?", isUnique([1,2,3]));

console.log("Array is unique?", isUnique([2,2,3]));