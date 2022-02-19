# Functional Programming

Questions that were solved and given as home work during Week 5 of neog.camp

## Pure functions

For the same input the output is always the same

- Atleast one argument
- Return a value
- should not mutate any of the arguments

## Higher Order function

A function that can either take function as an argument and or return a function or both is a higherorder function

## Map, filter and Reduce

```Javascript
array.reduce((accumulator, currentValue) => accumulator + currentValue)
```

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Read More [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## Currying

Calling a function that returns a function. Extension of closure concept. Outer function returns a inner function.

## Composition

Output of one function can be used as input to another function

> f(g(x)) = g(f(x))
