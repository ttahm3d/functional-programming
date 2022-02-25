// Get the names in an array for only those who have a cycle
/*

const family = [
  {
    name    : 'Tanay',
    haveCycle : true
  },
  {
    name     : 'Akanksha',
    haveCycle : false
  },
  {
    name     : 'Tanvi',
    haveCycle : true
  },
	{
    name     : 'Kanak',
    haveCycle : false
  }
];


Your output should be: ['Tanay', 'Tanvi']

*/

const family = [
  {
    name: "Tanay",
    haveCycle: true,
  },
  {
    name: "Akanksha",
    haveCycle: false,
  },
  {
    name: "Tanvi",
    haveCycle: true,
  },
  {
    name: "Kanak",
    haveCycle: false,
  },
];

const hasCycleReducer = (peopleWithCycles, currentPerson) =>
  currentPerson.haveCycle
    ? [...peopleWithCycles, currentPerson.name]
    : peopleWithCycles;

const peopleWithCycles = [];

console.log(family.reduce(hasCycleReducer, peopleWithCycles));
