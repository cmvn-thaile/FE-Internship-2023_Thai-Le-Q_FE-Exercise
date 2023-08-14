// 4. Write a function to get a unique random array number in the specified range.
// Input: (array length, min, max)
// Output: new array
// Ex: (4, 1, 10) => [3, 6, 1, 9]
// with o(n) complexity
function randomArr(arrLength, min, max) {
  const randomNum = () => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let arr = [];
  for (let i = 0; i < arrLength; i++) {
    let randomNumber = randomNum();

    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    } else {
      i--;
    }
  }

  return arr;
}

const result4 = randomArr(4, 3, 10);
console.log(result4);
