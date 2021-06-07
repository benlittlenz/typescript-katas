"use strict";
/*
  Directions:
    - Given an array and chunk size, divide the array into as many
      subarrays where each subarray is of lengths size
  Examples:
    chunk([1,2,3,4], 2) => [[1,2], [3,4]]
    chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
    chunk([1,2,3,4,5,6,7,8], 3) => [[1,2,3], [4,5,6], [7,8]]
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
function chunk(arr, size) {
    var result = [];
    var copy = __spreadArray([], arr);
    while (copy.length > 0) {
        result.push(copy.splice(0, size));
    }
    return result;
    //  return arr.reduce((chunks, el, index) => {
    //     if(index % size === 0) {
    //       chunks.push([el])
    //     } else {
    //       chunks[chunks.length - 1].push(el);
    //     }
    //     return chunks
    //   }, [])
}
exports.chunk = chunk;
