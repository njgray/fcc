function convert(str) {
  var charconv = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  
 return str.replace(/[&<>"']/ig,function(match){
    return charconv[match];
  });
}
