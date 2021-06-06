"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverseString_1 = require("../src/reverseString");
describe('Reverse String', function () {
    it('should reverse apple', function () {
        expect(reverseString_1.reverse('apple')).toBe('elppa');
    });
    it('should reverse apple', function () {
        expect(reverseString_1.reverse('hello')).toBe('olleh');
    });
});
