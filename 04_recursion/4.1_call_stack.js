var tracker = 0;
var callMe = function() {
  tracker++
  if (tracker === 3) {
      return 'loops!';
  }
  // callMe('anytime'); // if no return mentioned then by default the function will implicitly return undefined
  return callMe('anytime'); // must explicitly return the function 
};

console.log(callMe());

/* Stack
var tracker = 0;
var callMe = function() {
  tracker++ // 1
  if (tracker === 3) {
      return 'loops!';
  }
  // return fn - fn pushed to stack
  return callMe('anytime');
};

var callMe = function() {
  tracker++ // 2
  if (tracker === 3) {
      return 'loops!';
  }
  // return fn - fn pushed to stack
  return callMe('anytime');
};


var callMe = function() {
  tracker++ // 3
  if (tracker === 3) {
      return 'loops!';
  }
  // return loops to prev fn and keep returning loops till all the functions are popped from stack
  return callMe('anytime');
};
*/
