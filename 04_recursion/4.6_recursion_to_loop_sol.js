// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {
  let resultSoFar = ''
  
  for (let i = 0; i < array.length - 1; i++) {
    resultSoFar += array[i] + joinString;
  }
  
  // last item
  return resultSoFar + array[array.length - 1];
}

console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));
