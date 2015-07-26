function largestOfFour(arr) {
  var largest = [];
  
  arr.reduce(function(agg, cval){
    var biggest = cval.reduce(function(agg2, cval2) {
      if (agg2 < cval2){ 
        return cval2;
      } 
      return agg2; 
    });
    
    largest.push(biggest);

  }, arr[0]);
  
  return largest;
}
