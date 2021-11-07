const isUnique = (arr) => {
    var result = true;
    for(i=0; i < arr.length; i++) {
        console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`);
        for(j=0; j<arr.length; j++) {
            console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`);
            if(i != j && arr[i] === arr[j]){
                result = false;
            }
        }
    }
    return result;
}

console.log("Array is unique?", isUnique([1,2,3]));

console.log("Array is unique?", isUnique([2,2,3]));