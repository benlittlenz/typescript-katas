import { fizzbuzz } from '../src/fizzbuzz';

describe('Fizbuzz', () => {
  it('should return fizzbuzz', () => {
    expect(fizzbuzz(5)).toStrictEqual([1, 2, 'fizz', 4, 'buzz'])
  })

})
