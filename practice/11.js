/*

Given an array. Write a function to join all elements of the array with a hyphen in between them.

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]


Your output should be: 
Violet-Indigo-Blue-Green-Yellow-Orange-Red


*/

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

const hyphenateArray = (resultantString, arrayItem) =>
  resultantString.length !== 0 ? resultantString + "-" + arrayItem : arrayItem;

console.log(arr.reduce(hyphenateArray, ""));
