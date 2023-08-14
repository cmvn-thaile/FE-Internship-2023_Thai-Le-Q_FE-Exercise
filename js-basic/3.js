// 3. Write a JavaScript function to truncate a string to a certain number of words.
// Input: (string, number)
// Output: new string
// Ex: ('The quick brown fox jumps over the lazy dog', 4) => "The quick brown fox"
function truncateString(str, num) {
  const arr = str.split(" ");
  return arr.slice(0, num).join(" ");
}

// const result3 = truncateString("str str2 str3 sfs sksk sksk sksk sksk", 3);
// console.log(result3);
