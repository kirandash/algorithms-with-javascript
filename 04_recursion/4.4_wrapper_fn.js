// Wrapper fn with closure - no need to pass end to recurse fn
function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${start} until ${end}`);

    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

// Wrapper fn with memo - pass both start and end to fn
function MemoFnLoop(i, end) {
  console.log(`looping from ${i} until ${end}`);
  if (i < end) {
    MemoFnLoop(i + 1, end);
  }
}

console.log("~~~ wrapperFnLoop ~~~");
wrapperFnLoop(1, 5);
console.log("~~~ MemoFnLoop ~~~");
MemoFnLoop(1, 6);
