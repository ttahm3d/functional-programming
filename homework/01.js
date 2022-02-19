// Given an array of strings
// 1. return a new array of objects with key as the given names and
//    value as the number of letters in the given question
// 2. find the number of strings with same number of characters and return an object
// eg:
// ["apple", "orange", "mango", "banana"] => output = {5:2, 6:2}
// 3. return array of strings with vowels in them

// 1. return a new array of objects with key as the given names and
//    value as the number of letters in the given question
const names = ["tahir", "ahmed", "minnesota"];
const objectFromString = (str) => ({
  [str]: str.length,
});
console.log(names.map((name) => objectFromString(name)));

// 2. find the number of strings with same number of characters and return an object
// eg:
// ["apple", "orange", "mango", "banana"] => output = {5:2, 6:2}
const fruits = ["apple", "orange", "mango", "banana", "raspberry"];
const lengthReducer = (lengthObj, fruit) => ({
  ...lengthObj,
  [fruit.length]: lengthObj[fruit.length] + 1 || 1,
});
console.log(fruits.reduce(lengthReducer, {}));

// 3. return array of strings with vowels in them
const words = ["abc", "def", "ghi", "jklm", "nop", "qrst"];
const containsVowels = (word) =>
  word
    .toLowerCase()
    .split("")
    .some((w) => "aeiou".split("").includes(w));

console.log(words.filter(containsVowels));
