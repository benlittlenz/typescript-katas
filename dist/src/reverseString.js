"use strict";
/*
  Directions:
    - Given a string, return a new string reversed.
  Examples:
    reverse('apple') => elppa
    reverse('hello') => 'olleh'
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
function reverse(str) {
    return str.split("").reverse().join("");
}
exports.reverse = reverse;
