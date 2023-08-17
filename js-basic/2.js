// 2. Write a JavaScript function to count the occurrence of a substring in a string.
// Input: (string, substring)
// Output: the occurrence of a substring in a string
// Ex: ("The quick brown fox jumps over the lazy dog", 'the') => 2
// Ex: ("The quick brown fox jumps over the lazy dog", 'fox') => 1
/**
 * Counts the number of occurrences of a substring in a given string.
 * @param {string} str - The string to search in.
 * @param {string} subStr - The substring to search for.
 * @returns {number} - The number of occurrences of the substring in the string.
 */
function occurrenceOfSubstring(str, subStr) {
  let count = 0;
  let index = str.toLocaleLowerCase().indexOf(subStr);
  while (index !== -1) {
    count++;
    index = str.indexOf(subStr, index + 1);
  }
  return count;
}
const result2 = occurrenceOfSubstring("the quick brown fox jumps over the lazy dog", "the");
console.log(result2);
