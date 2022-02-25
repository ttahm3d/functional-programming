/*

If your input is: "neogrammer"
Your output should be: "NEOGRAMMER"

If your input is: "neoG"
Your output should be: "NEOG"

*/

const string1 = "neogrammer";
const string2 = "neoG";

const transformToUppercase = (string) => string.toUpperCase();

console.log(transformToUppercase(string1));
console.log(transformToUppercase(string2));
