"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fizzbuzz_1 = require("../src/fizzbuzz");
describe('Fizbuzz', function () {
    it('should return fizzbuzz', function () {
        expect(fizzbuzz_1.fizzbuzz(5)).toStrictEqual([1, 2, 'fizz', 4, 'buzz']);
    });
});
