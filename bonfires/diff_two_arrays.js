function diff(arr1, arr2) {
  var newArr = [],
      arr_all = arr1.concat(arr2);
   
  newArr = arr_all.filter(function(x){
    return (arr_all.indexOf(x) === arr_all.lastIndexOf(x));
  });
  
  return newArr;
}
