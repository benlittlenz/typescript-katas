"use strict";
/*
  Directions:
    - Given a string, return true if a string is a palindrome,
      or false if not. A palindrome are strings that form the same
      word reversed
  Examples:
    palindrome('abba') => true
    palindrome('abcdefg') => false
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = void 0;
function palindrome(str) {
    var reversed = str.split("").reverse().join("");
    return isPalindrome(str, reversed);
}
exports.palindrome = palindrome;
var isPalindrome = function (original, reversed) {
    return original === reversed ? true : false;
};
