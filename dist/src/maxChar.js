"use strict";
/*
  Directions:
    - Given a string, return the character that is most commonly used
  Examples:
    maxChar('abvcccccd') => c
    maxChar('afdsds 1111122') => 1
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxChar = void 0;
function maxChar(str) {
    var obj = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var s = str_1[_i];
        obj[s] ? obj[s]++ : obj[s] = 1;
    }
    var arr = Object.values(obj);
    var max = Math.max.apply(Math, arr);
    return Object.keys(obj).find(function (key) { return obj[key] === max; });
}
exports.maxChar = maxChar;
