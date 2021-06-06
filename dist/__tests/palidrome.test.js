"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var palindrome_1 = require("../src/palindrome");
describe('Palindrome', function () {
    it('should reverse apple', function () {
        expect(palindrome_1.palindrome('abba')).toBe(true);
    });
    it('should reverse apple', function () {
        expect(palindrome_1.palindrome('abcdefg')).toBe(false);
    });
});
