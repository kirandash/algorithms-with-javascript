function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
        // accumulator(resultSoFar + joinString) being passed to fn
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, "");
}

joinElements(["s", "cr", "t cod", " :) :)"], "e");
