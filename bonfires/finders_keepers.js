function find(arr, func) {
  var first_true;
  
  arr.some(function(cval){
    if (this(cval) === true) {
      first_true = cval;
      return true;
    }
  }, func);
  
  return first_true;
}
