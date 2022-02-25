// Given an array. Write a function to find the product of all elements which are even.

/* 

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

Your output should be: 96

*/

const arr = [2, 1, 3, 7, 5, 6, 8, 9];

const productEvenReducer = (acc, num) => (num % 2 ? acc : acc * num);

console.log(arr.reduce(productEvenReducer, 1));
