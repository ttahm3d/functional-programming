// [22, "tanay", 55, "tanvi", 5 ,7, 9]
// [1,3,5,2,22,11,9]
// return sum of odd numbers in the array

const array = [1, 3, 5, 2, 22, 11, 9];

// for verification

// let sum = 0;
// array.forEach((a) => (a % 2 !== 0 ? (sum = sum + a) : null));
// console.log(sum);

const oddNummbersReducer = (accumulator, currentValue) =>
  currentValue % 2 !== 0
    ? (accumulator = accumulator + currentValue)
    : accumulator;

console.log(array.reduce(oddNummbersReducer));

const oddEvenObj = { oddSum: 0, evenSum: 0 };

const oddEvenReducer = (oddEvenObj, num) =>
  num % 2 !== 0
    ? { ...oddEvenObj, oddSum: oddEvenObj.oddSum + num }
    : { ...oddEvenObj, evenSum: oddEvenObj.evenSum + num };

console.log(array.reduce(oddEvenReducer, oddEvenObj));
