// take an object with your mother's name and age and return a new object and calculate your sibling's age from your age

// immutabability test tahir !== ahmed => true

const tahir = {
  mothersName: "Sabiha",
  myAge: 25,
};

const ahmed = { ...tahir, myAge: tahir.myAge - 4 };

console.log(tahir);
console.log(ahmed);
