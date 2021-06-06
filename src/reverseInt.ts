/*
  Directions:
    - Given an integer, return an integer that is reversed
  Examples:
    reverseInt(15) => 51
    reverseInt(981) => 189
    reverseInt(500) => 5
    reverseInt(-15) => -51
    reverseInt(-90) => -9
*/

export function reverseInt(num: number) {
  const reversed = String(num)
    .split("")
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(num);
}
