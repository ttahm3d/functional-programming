// Given an array of integers
// 1. Find the sum of all odd numbers
// 2. Find the sum of numbers at odd indices
// 3. Find the biggest number in the array
// 4. Find the number divisible by 10
// 5. Return array of numbers where odd numbers are increased by 1 and even numbers are decreased by 1
// 6. Return an object with sum of odd numbers and sum of even numbers separately

const array = [1, 3, 5, 99, 2, 64, 36, 7, 11, 22, 50];

// 1. Find the sum of all odd numbers
const sumOfOddNumbers = (acc, cur) => (cur % 2 !== 0 ? (acc = acc + cur) : acc);
console.log(array.reduce(sumOfOddNumbers, 0)); // Need to pass 0 as second argument or else it will take 1st element = 0 as the initial value

// 2. Find the sum of numbers at odd indices
const sumOfNumbersAtOddIndices = (acc, cur, index) =>
  index % 2 !== 0 ? (acc = acc + cur) : acc;
console.log(array.reduce(sumOfNumbersAtOddIndices, 0));

// 3. Find the biggest number in the array
const biggestNumber = (acc, num) => (num > acc ? (acc = num) : acc);
console.log(array.reduce(biggestNumber, 0));

// 4. Find the number divisible by 10
const divisibleBy10 = (acc, num) => (num % 10 === 0 ? (acc = num) : acc);
console.log(array.reduce(divisibleBy10, 0));

const filterAllDivisibleBy10 = (num) => num % 10 === 0;
console.log(array.filter(filterAllDivisibleBy10));

// 5. Return array of numbers where odd numbers are increased by 1 and even numbers are decreased by 1
const increaseOddDecreaseEven = (num) => (num % 2 === 0 ? num - 1 : num + 1);
console.log("Initial Array", array);
console.log("resultant array", array.map(increaseOddDecreaseEven));

// 6. Return an object with sum of odd numbers and sum of even numbers separately
const oddEvenReducer = (oddEvenObj, num) =>
  num % 2 === 0
    ? { ...oddEvenObj, evenSum: oddEvenObj.evenSum + num }
    : { ...oddEvenObj, oddSum: oddEvenObj.oddSum + num };
const oddEvenObj = { oddSum: 0, evenSum: 0 };
console.log(array.reduce(oddEvenReducer, oddEvenObj));
