// 3. Write a JavaScript function to truncate a string to a certain number of words.
// Input: (string, number)
// Output: new string
// Ex: ('The quick brown fox jumps over the lazy dog', 4) => "The quick brown fox"
/**
 * Truncates a given string to a specified number of words.
 * @param {string} str - The string to truncate.
 * @param {number} num - The number of words to keep in the truncated string.
 * @returns {string} The truncated string.
 */
function truncateString(str, num) {
  return str.split(" ").slice(0, num).join(" ");
}

// const result3 = truncateString("str str2 str3 sfs sksk sksk sksk sksk", 3);
// console.log(result3);
