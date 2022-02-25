/*

Flatten an array without using flat().


const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}

*/

const input = [["a", "b", "c"], ["c", "d", "e"], ["e", "d", "f"], "t"];

const flattenArray = (array, item) => [...array, ...item];

const countOccurance = (object, arrayItem) => ({
  ...object,
  [arrayItem]: object[arrayItem] + 1 || 1,
});

const flatArray = input.reduce(flattenArray, []);

const countWithoutFlattening = (object, arrayItem);

console.log(flatArray.reduce(countOccurance, {}));
