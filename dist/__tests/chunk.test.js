"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_1 = require("../src/chunk");
describe('Chunk', function () {
    it('should chunk 1-4 by 2', function () {
        expect(chunk_1.chunk([1, 2, 3, 4], 2)).toStrictEqual([[1, 2], [3, 4]]);
    });
    it('should chunk 1-5 by 2', function () {
        expect(chunk_1.chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
    });
    it('should chunk 1-8 by 3', function () {
        expect(chunk_1.chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    });
});
