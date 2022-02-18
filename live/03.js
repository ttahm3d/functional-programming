// Write a function that takes a object which contains a person's name and age and return object with age increased by 1

const birthday = (person) => ({ ...person, age: person.age + 1 });

const obj = {
  name: "tahir",
  age: 24,
};

console.log(birthday(obj));
