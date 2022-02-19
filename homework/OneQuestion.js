// Write a function compose that can take any number of functions and
// return the function which will run the function in order when called with argument

// eg:
// const increment = (num) => num + 1;
// const square = (num) => num * num;
//    const incrementTheSquare = compose(increment, square)
//
//

const reducer = (acc, currentFn) => currentFn(acc);

const increment = (num) => num + 1;
const square = (num) => num * num;
const multiplyBy10 = (num) => num * 10;

const compose =
  (...args) =>
  (number) =>
    args.reduce(reducer, number); // calling the reducer along with the initial value

const incrementAndSquare = compose(increment, square);
console.log(incrementAndSquare(9));

const squareAndIncrement = compose(square, increment);
console.log(squareAndIncrement(9));

const incrementSquareMultiply = compose(increment, square, multiplyBy10);
console.log(incrementSquareMultiply(9));
