function factorialize(num) {
  var result = 1,
      n = 1;
  
  while (n < num) {
    result *= (n + 1);
    console.log(n, n+1);
    n ++;
  }
  
  return result;
}
