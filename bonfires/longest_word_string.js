function findLongestWord(str) {
  var words = str.split(' ');
  var longest = 0;
  return words.reduce(function(agg, cval){
    console.log(agg);
    console.log(cval.length);
    if (agg < cval.length) {
       return cval.length;
    }
    
    return agg;
  }, longest);
}
