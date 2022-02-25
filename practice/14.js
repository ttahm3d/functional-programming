/*

Write a function that takes in a string and converts only 
the vowels to uppercase and all other characters to lowercase.

If your input is: "neoG"
Your output should be: "nEOg"

*/

const input = "neoG";

const stringTransformer = (transformedString, letter) =>
  "aeiou".includes(letter.toLowerCase())
    ? transformedString + letter.toUpperCase()
    : transformedString + letter.toLowerCase();

console.log(input.split("").reduce(stringTransformer, ""));
