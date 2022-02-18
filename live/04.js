// write a function to check if number is less than 10

// supply this function to array.filter and check the answer

const lessThanTen = (n) => n < 10; // no need of ternary as this returns true or false on its own

const a = [1, 2, 5, 9, 11, 31, 7];

console.log(a.filter(lessThanTen));
