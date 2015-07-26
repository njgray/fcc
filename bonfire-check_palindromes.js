function palindrome(str) {
  str = str.replace(/[^A-z]|[\s]/g, '').toLowerCase();
  return (str.split('').reverse().join('') === str);
}
