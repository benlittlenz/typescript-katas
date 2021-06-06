import { palindrome } from '../src/palindrome';

describe('Palindrome', () => {
  it('should reverse apple', () => {
    expect(palindrome('abba')).toBe(true)
  })
  it('should reverse apple', () => {
    expect(palindrome('abcdefg')).toBe(false)
  })
})
