/* 

Given an array. Write a function that takes in the given array and 
prints only the words which are more than 5 characters in length.

const arr = [‘eat’, ‘sleep’, ‘repeat’, ‘code’];

Your output should be: ['repeat']


*/

const arr = ["eat", "sleep", "repeat", "code"];

const moreThan5Chars = (word) => word.length > 5;

console.log(arr.filter(moreThan5Chars));
