function add(arg1, arg2) {

   function sum2and(num) {
      if (typeof arg1 === 'number') {
        return num + arg1;
      } 
    }
  
  if (typeof(arg1) === 'number' && typeof(arg2) === 'number') {
      if (arguments.length === 2) {
          return arg1+arg2;
      } 
  } else {
    return sum2and;
  }
  
  return undefined;
}
