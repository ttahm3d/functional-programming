// Create a function that returns the calculates sum(2)(4)

const sum = (num1) => (num2) => num1 + num2;

const AddTwo = sum(2);

console.log(AddTwo(4));
console.log(AddTwo(9));
console.log(AddTwo(23));
