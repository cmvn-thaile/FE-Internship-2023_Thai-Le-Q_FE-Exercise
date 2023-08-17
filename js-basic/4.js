// 4. Write a function to get a unique random array number in the specified range.
// Input: (array length, min, max)
// Output: new array
// Ex: (4, 1, 10) => [3, 6, 1, 9]
// with o(n) complexity
/**
 * Generates an array of unique random numbers within a specified range.
 * @param {number} arrLength - The length of the array to be generated.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (exclusive).
 * @returns {number[]} - An array of unique random numbers within the specified range.
 */
function randomArr(arrLength, min, max) {
  const randomNum = () => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let arr = [];
  for (let i = 0; i < arrLength; i++) {
    const randomNumber = randomNum();

    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    } else {
      i--;
    }
  }

  return arr;
}

// const result4 = randomArr(4, 3, 10);
// console.log(result4);

//make to O(n)
function randomArr(arrLength, min, max) {
  const randomNum = () => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let arr = [];
  let generatedNums = {};

  while (arr.length < arrLength) {
    let randomNumber = randomNum();

    if (!generatedNums[randomNumber]) {
      generatedNums[randomNumber] = true;
      arr.push(randomNumber);
    }
  }
  console.log(generatedNums);
  return arr;
}

const result4 = randomArr(4, 3, 10);
console.log(result4);
