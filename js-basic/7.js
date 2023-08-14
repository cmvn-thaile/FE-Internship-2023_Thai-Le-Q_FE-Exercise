// 7. Write a function to find the maximum sum of 2 consecutive elements in the array.
// Input: (array)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7]) => 13
// Ex: ([1, 2, 3, 7, 2, 8, 4]) => 12

/**
 * Calculates the maximum sum of two consecutive elements in an array.
 * @param {number[]} arr - The input array.
 * @returns {number} The maximum sum of two consecutive elements in the array.
 */
function maxSumOfTwoConsecutive(arr) {
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    max = Math.max(max, sum);
  }
  return max;
}

console.log(maxSumOfTwoConsecutive([1, 2, 3, 7, 5, 6, 4]));
