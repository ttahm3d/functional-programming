// Create a function that takes a name and logs anything with that name

const logger = (name) => (message) => `${name} says ${message}`;

const tahirSays = logger("Tahir");

console.log(tahirSays("Hello"));
