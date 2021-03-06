'use strict';

// Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // π
console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}  // π, π

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}  // π, π

// c. forEach
fruits.forEach((fruit) => console.log(fruit));  // π, π

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);   // ['π', 'π', 'π', 'π']

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);   // 

// unshift: add an item to the benigging
fruits.unshift('π', 'π');
console.log(fruits);  // ['π', 'π', 'π', 'π']

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);   // ['π', 'π']

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(1);  // ['π']
console.log(fruits);
fruits.splice(1, 1); // ['π', 'π', 'π', 'π']
console.log(fruits);
fruits.splice(1, 0, 'π', 'π');
console.log(fruits);  //  [ "π", "π", "π", "π", "π", "π", "π" ]

//combine two arrays
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['π', 'π', 'π', 'π', 'π', 'π', 'π', 'π₯₯']

// 5. Searching
//indexOf: find the index
console.clear();
const fruits = ['π', 'π', 'π', 'π', 'π', 'π'];
console.log(fruits);
console.log(fruits.indexOf('π')); // 0
console.log(fruits.indexOf('π')); // 2
console.log(fruits.indexOf('π₯₯')); // -1

//includes
console.log(fruits.includes('π'));  // true
console.log(fruits.includes('π₯₯'));  // false

// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π₯₯'));