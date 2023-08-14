// 2. Write a JavaScript function to count the occurrence of a substring in a string.
// Input: (string, substring)
// Output: the occurrence of a substring in a string
// Ex: ("The quick brown fox jumps over the lazy dog", 'the') => 2
// Ex: ("The quick brown fox jumps over the lazy dog", 'fox') => 1
function occurrenceOfSubstring(str, subStr) {
  let count = 0;
  let index = str.indexOf(subStr);
  while (index !== -1) {
    count++;
    index = str.indexOf(subStr, index + 1);
  }
  return count;
}
// const result2 = occurrence("str str str sfs", "str");
// console.log(result2);
