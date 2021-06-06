import { maxChar } from '../src/maxChar';

describe('Reverse String', () => {
  it('should return c', () => {
    expect(maxChar('abvcccccd')).toBe('c')
  })
  it('should return 1', () => {
    expect(maxChar('afdsds 1111122')).toBe('1')
  })

  it('should return x', () => {
    expect(maxChar('bxx3')).toBe('x')
  })
})
