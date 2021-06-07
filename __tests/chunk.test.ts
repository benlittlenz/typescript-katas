import { chunk } from '../src/chunk';

describe('Chunk', () => {
  it('should chunk 1-4 by 2', () => {
    expect(chunk([1,2,3,4], 2)).toStrictEqual([[1,2], [3,4]])
  })
  it('should chunk 1-5 by 2', () => {
    expect(chunk([1,2,3,4,5], 2)).toStrictEqual([[1,2], [3,4], [5]])
  })
  it('should chunk 1-8 by 3', () => {
    expect(chunk([1,2,3,4,5,6,7,8], 3)).toStrictEqual([[1,2,3], [4,5,6], [7,8]])
  })
})
