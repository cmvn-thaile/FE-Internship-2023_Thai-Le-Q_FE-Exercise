// 5. Write a function to generate a random hex color code.
// Input: ()
// Output: string
// Ex: () => #1A7B9D

/**
 * Generates a random hexadecimal color code.
 * @returns {string} The randomly generated hexadecimal color code.
 */
function randomHexColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

// console.log(randomHexColor())
