import { reverseInt } from '../src/reverseInt';

describe('Reverse Integers', () => {
  it('should reverse 15', () => {
    expect(reverseInt(15)).toBe(51)
  })
  it('should reverse 981', () => {
    expect(reverseInt(981)).toBe(189)
  })
  it('should reverse 500', () => {
    expect(reverseInt(500)).toBe(5)
  })
  it('should reverse -15', () => {
    expect(reverseInt(-15)).toBe(-51)
  })
  it('should reverse -90', () => {
    expect(reverseInt(-90)).toBe(-9)
  })
})
