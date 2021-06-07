/*
  Directions:
    - Given an array and chunk size, divide the array into as many
      subarrays where each subarray is of lengths size
  Examples:
    chunk([1,2,3,4], 2) => [[1,2], [3,4]]
    chunk([1,2,3,4,5], 2) => [[1,2], [3,4], [5]]
    chunk([1,2,3,4,5,6,7,8], 3) => [[1,2,3], [4,5,6], [7,8]]
*/

export function chunk(arr: any, size: number) {
  const result = [] as any;
  let copy = [...arr] as any
  
  while(copy.length > 0) {
    result.push(copy.splice(0, size))
  }

  return result
}
