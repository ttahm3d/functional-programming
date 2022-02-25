/*

Given an array of objects. 
If the name of an item is more than 5 characters in length, add type as ‘vegetable’. 
If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.

const arr = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]

Your Output should be:
[
	{
		name: "Apple",
		type: "fruit"
	},
	{
		name: "Mango",
		type: "fruit"
	},
	{
		name: "Potato"
		type: "vegetable"
	},
	{
		name: "Guava",
		type: "fruit"
	},
	{
		name: "Capsicum",
		type: "vegetable"
	}
]


*/

const arr = [
  {
    name: "Apple",
  },
  {
    name: "Mango",
  },
  {
    name: "Potato",
  },
  {
    name: "Guava",
  },
  {
    name: "Capsicum",
  },
];

const resultantArray = (array, item) =>
  item.name.length > 5
    ? [...array, { ...item, type: "Vegetable" }]
    : [...array, { ...item, type: "Fruit" }];

console.log(arr.reduce(resultantArray, []));
