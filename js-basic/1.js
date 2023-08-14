// 1. Write a JavaScript function to repeat a string a specified times.
// Input: (string, repeat times)
// Output: the new string
// Ex: ("FE", 4) => 'FEFEFEFE'

/**
 * Repeats a given string a specified number of times.
 * @param {string} str - The string to repeat.
 * @param {number} time - The number of times to repeat the string.
 * @returns {string} The repeated string.
 */
function repeatStr(str, time) {
  let repeatedStr = "";
  for (let i = 0; i < time; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

// const result = repeatStr("fe", 3);
// console.log(result);

//using build-in

function repeatStr(str, time) {
  return str.repeat(time);
}

console.log(repeatStr("fe", 3));