function add(num1, num2) {
  if (typeof(num1) === 'number') {
    
    if (typeof(num2) === 'number') {
      return num1 + num2;
    }
    
    if (! num2) {
      return function(num){
        if (typeof(num) === 'number') {
          return num1 + num;
        }
      
        return undefined;
      };
    }
  }
  
    return undefined;
}
