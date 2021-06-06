"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverseInt_1 = require("../src/reverseInt");
describe('Reverse Integers', function () {
    it('should reverse 15', function () {
        expect(reverseInt_1.reverseInt(15)).toBe(51);
    });
    it('should reverse 981', function () {
        expect(reverseInt_1.reverseInt(981)).toBe(189);
    });
    it('should reverse 500', function () {
        expect(reverseInt_1.reverseInt(500)).toBe(5);
    });
    it('should reverse -15', function () {
        expect(reverseInt_1.reverseInt(-15)).toBe(-51);
    });
    it('should reverse -90', function () {
        expect(reverseInt_1.reverseInt(-90)).toBe(-9);
    });
});
