"use strict";
/*
  Directions:
    - Given an integer, return an integer that is reversed
  Examples:
    reverseInt(15) => 51
    reverseInt(981) => 189
    reverseInt(500) => 5
    reverseInt(-15) => -51
    reverseInt(-90) => -9
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseInt = void 0;
function reverseInt(num) {
    var reversed = String(num)
        .split("")
        .reverse()
        .join('');
    return parseInt(reversed) * Math.sign(num);
}
exports.reverseInt = reverseInt;
