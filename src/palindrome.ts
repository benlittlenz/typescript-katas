/*
  Directions:
    - Given a string, return true if a string is a palindrome,
      or false if not. A palindrome are strings that form the same
      word reversed
  Examples:
    palindrome('abba') => true
    palindrome('abcdefg') => false
*/

export function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return isPalindrome(str, reversed);
}

const isPalindrome = (original, reversed): boolean => {
  return original === reversed ? true : false;
}
