/*
  Directions:
    - Given a string, return the character that is most commonly used
  Examples:
    maxChar('abvcccccd') => c
    maxChar('afdsds 1111122') => 1
*/

export function maxChar(str: string) {
  let obj = {};

  for(let s of str) {
    obj[s] ? obj[s]++ : obj[s] = 1;
  }

  let arr = Object.values(obj) as any;
  let max = Math.max(...arr)
  return Object.keys(obj).find(key => obj[key] === max);
}
