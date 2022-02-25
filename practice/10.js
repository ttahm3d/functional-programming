/* 

Given an array of objects
a. Get all the items in an array whose quantity is less than 2.
b. Get the total quantity of items present in the inventory.
c. Find the object which contains the item whose quantity is zero.

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];

*/

const inventory = [
  { name: "fans", quantity: 3 },
  { name: "chimneys", quantity: 0 },
  { name: "bulbs", quantity: 5 },
  { name: "stove", quantity: 1 },
];

const quantityLessThanTwo = (resultantArray, inventoryObj) =>
  inventoryObj.quantity < 2
    ? [...resultantArray, inventoryObj]
    : resultantArray;

console.log(inventory.reduce(quantityLessThanTwo, []));

const totolQuantity = (total, inventoryObj) => total + inventoryObj.quantity;

console.log(inventory.reduce(totolQuantity, 0));

const quantityZero = (resultantArray, inventoryObj) =>
  inventoryObj.quantity === 0
    ? [...resultantArray, inventoryObj]
    : resultantArray;

console.log(inventory.reduce(quantityZero, []));
