/*
  Directions:
    - Given a string, return a new string reversed.
  Examples:
    reverse('apple') => elppa
    reverse('hello') => 'olleh'
*/

export function reverse(str: string) {
  return str.split("").reverse().join("");
}
