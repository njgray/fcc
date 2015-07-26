function titleCase(str) {
  return str.split(' ').map(function(word){
    return word.toUpperCase()[0] + word.substring(1).toLowerCase();
  }).join(' ');
}
