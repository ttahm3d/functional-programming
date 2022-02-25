/* 

Given an array. Write a function that takes in the given array and prints only the 
numbers which are less than 8 and also an even number.

jsx
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

Your output should be: [2, 6, 8, 4]


*/

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const isLessThan8orEven = (num) => num <= 8 && num % 2 === 0;

console.log(arr.filter(isLessThan8orEven));
