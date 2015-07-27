function every(collection, pre) {
  return collection.every(function(x) { return (x[pre]); });
}
