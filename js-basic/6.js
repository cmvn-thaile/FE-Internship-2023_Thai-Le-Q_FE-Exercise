// 6. Write a function that calculates the sum of the ordered elements that are divisible by a specified number in the array.
// Input: (array, number)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7], 2) => 12
// Ex: ([1, 2, 3, 4, 5, 6, 7], 3) => 9

/**
 * Calculates the sum of all elements in an array that are divisible by a given number.
 * @param {number[]} arr - The array of numbers to be checked.
 * @param {number} num - The number to check divisibility against.
 * @returns {number} - The sum of all elements in the array that are divisible by the given number.
 */
function sumDivisibleByNumber(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % num === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// console.log(sumDivisible([1, 2, 3, 4, 5, 6, 7], 2))

function sumDivisibleByNumber(arr, num) {
  return arr.reduce((sum, current) => {
    if (current % num === 0) {
      return sum + current;
    }
    return sum;
  }, 0);
}

//  console.log(sumDivisibleByNumber([1, 2, 3, 4, 5, 6, 7], 2))