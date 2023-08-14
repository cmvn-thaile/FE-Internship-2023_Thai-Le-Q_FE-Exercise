// 1. Write a JavaScript function to repeat a string a specified times.
// Input: (string, repeat times)
// Output: the new string
// Ex: ("FE", 4) => 'FEFEFEFE'

function repeatStr(str, time) {
  let repeatedStr = "";
  for (var i = 0; i < time; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}

// const result = repeatStr("fe", 3);
// console.log(result);

//using build-in

function repeatStr(str, time) {
  const str = str;
  const repeatedStr = str.repeat(time);
  return repeatedStr;
}
