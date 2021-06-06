"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxChar_1 = require("../src/maxChar");
describe('Reverse String', function () {
    it('should return c', function () {
        expect(maxChar_1.maxChar('abvcccccd')).toBe('c');
    });
    it('should return 1', function () {
        expect(maxChar_1.maxChar('afdsds 1111122')).toBe('1');
    });
    it('should return x', function () {
        expect(maxChar_1.maxChar('bxx3')).toBe('x');
    });
});
