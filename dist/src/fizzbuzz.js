"use strict";
/*
  Directions:
    - Write a program that returns numbers from 1 o n.
      For multiple of three print "fizz"
      for multiples of five print buzz
      for numbers which are multiple of 3 and 5, print "fizzbuzz"
  Examples:
    fizzbuzz(5) =>
     1
     2
     fizz
     4
     buzz
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzz = void 0;
function fizzbuzz(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0)
            arr.push('fizz');
        else if (i % 5 === 0)
            arr.push('buzz');
        else if (i % 3 === 0 && i % 5 === 0)
            arr.push('fizzbuzz');
        else
            arr.push(i);
    }
    return arr;
}
exports.fizzbuzz = fizzbuzz;
