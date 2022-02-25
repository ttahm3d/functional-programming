/* 

Write a function that accepts a number as input and inserts hyphens between every two even numbers.

If your input is: 24345687

Your output should be: 2-23456-87


*/

const input = 24345687;

const addHyphensBtweenEvenNumbers = (acc, cur, index, arr) =>
  cur % 2 === 0 && arr[index + 1] % 2 === 0 ? `${acc}${cur}-` : `${acc}${cur}`;

const numberToString = input.toString();

console.log([...numberToString].reduce(addHyphensBtweenEvenNumbers, ""));
