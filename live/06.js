// given an array return the sum of all the numbers less than 10

const a = [1, 31, 3, 7, 5, 91, 23, 4];

const sumOfNumbersLessThan10 = (accumulator, currentValue) =>
  currentValue < 10 ? (accumulator = accumulator + currentValue) : accumulator;

console.log(a.reduce(sumOfNumbersLessThan10));

const oddEvenObj = { oddSum: 0, evenSum: 0 };

const oddEvenReducer = (oddEvenObj, num) =>
  num % 2 !== 0
    ? { ...oddEvenObj, oddSum: oddEvenObj.oddSum + num }
    : { ...oddEvenObj, evenSum: oddEvenObj.evenSum + num };

console.log(oddEvenReducer(oddEvenObj, 3));

console.log(array.reduce(oddEvenReducer, oddEvenObj));
