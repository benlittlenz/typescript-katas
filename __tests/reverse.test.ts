import { reverse } from '../src/reverseString';

describe('Reverse String', () => {
  it('should reverse apple', () => {
    expect(reverse('apple')).toBe('elppa')
  })
  it('should reverse apple', () => {
    expect(reverse('hello')).toBe('olleh')
  })
})
