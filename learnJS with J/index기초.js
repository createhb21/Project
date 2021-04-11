'use strict';

/* 001 array helper methods
console.log([0, 1, 2, 3, 4, 5, 6].slice(0, 3));    //  [ 0, 1, 2 ]
console.log([0, 1, 2, 3, 4, 5, 6].concat([7, 8, 9])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([0, 1, 2, 3, 4, 5, 6].concat(7, 8, 9)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([0, 1, 2, 3, 4, 5, 6].concat({ name: 'Jupeter'})); // [ 0, 1, 2, 3, 4, 5, 6, { name: 'Jupeter' } ]
console.log([0, 1, 2, 3, 4, 5, 6].map(x => x*2)); // [0, 2, 4, 6, 8, 10, 12]
console.log([0, 1, 2, 3, 4, 5, 6].filter(() => true));  // [0, 1, 2, 3, 4, 5, 6]
console.log([0, 1, 2, 3, 4, 5, 6].reduce((acc, cur) => acc + cur, 10));  // 31
console.log([0, 1, 2, 3, 4, 5, 6].reduce((acc, cur) => (acc + cur) / 7));  // 0.9722224583294377
// */

/* 002 변수, function, object, this 등
// var deliveryBoy = 1
// let deliveryBoy = 'Jupeter'
// const deliveryBoy = function(message, handler) {
//   handler(message); 
// }  // handler 자체도 function, message는 string이라고 가정. function 역시 변수 속에 담길 수 있음.
// Object 속에 있는 function을 method라고 한다. === 구체적으로 말하면, class 내부에 정의되있는 function을 method 라고 한다.

const deliveryBoy = {
  // key + value
  name: "Jupeter",
  age: 35,
  occupation: {
    title: 'Boss',
    experience: 10
  },
  // feild or property 는 object를 구성하는 구성요소
  handlerMessage: function(message, handler) {
  // return "hello";
    handler(message);
  },

  receive: function() {
    this.handlerMessage("hello, ", (message) => {
      console.log(message + this.name)
    })  // function을 호출.
  }
}

console.log(deliveryBoy.name);  // Jupeter
console.log(deliveryBoy["name"]); // Jupeter
console.log(deliveryBoy.age); // 35
console.log(deliveryBoy["occupation"]); // { title: 'Boss', experience: 10 }
console.log(deliveryBoy.handlerMessage); // function handlerMessage(message, handler)
console.log(deliveryBoy.handlerMessage());  // hello
console.log(deliveryBoy.receive());  //   hello, Jupeter
                                    //    undefined

handlerMessage: function(message, handler) {
    handler(message);
  }

handlerMessage: (message, handler) => handler(message)

receive: function() {
  this.handlerMessage("hello, ", (message) => {
    console.log(message + this.name)
  })  
}

receive: ()=> {this.handlerMessage("hello, ", (message) => {console.log(message + this.name)})};

const simplePrint = function () {
  console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!');
// */

/* 003 var, let, const
var message = "hi";
{
    var message = "bye";
}
console.log(message); // bye    => var의 문제점. scope 개념이 뒤죽박죽... 결함.

let message = "hi";
{
    let message = "bye";
}
console.log(message); // hi

const message = "hi";
{
    const message = "bye";
}
console.log(message); // hi
*/


/* 004 var과 let
if (true) {
  var age = 25; 
  console.log('age: ', age);   // age: 25
}
console.log('age: ', age);    // age: 25

if (true) {
  let age = 25; 
  console.log('age: ', age);   // age: 25
}
let age = 15;
console.log('age: ', age);    // age: 15

finction doSomething() {
  let age = 25;
}

doSomething();

console.log(age); // error (var도 function에서는 마찬가지)
*/


/* 005 const
const age = 15;
const str = 'Jupeter'
// age = 20;
// str = 'Superman';
console.log('age: ', age);   // age: 15

// value of number, string of const can't be changed. 
// but, value of object, array, list can be changed.
// but, the address of memory block where array or object reside can't be changed.
const age = [15, 20, 25];
age.push(30)
console.log('age: ', age);   // age:  [ 15, 20, 25, 30 ]

const obj = {
  key: 'Jupeter',
  occupation: 'coder'
}

let obj2 = {};
obj.key = 'Superman';

obj = obj2   // error 발생

console.log(obj);   // { key: 'Superman', occupation: 'coder' }
*/


/* 006 function 
function add(a, b) {
  return a + b;
}

console.log(add); // function add(a, b)
console.log(add(3, 5));  // 8

const add = function (a, b) {
  return a + b;
}

console.log(add); // function add(a, b)
console.log(add(3, 5));  // 8

const add = (a, b) => a + b;

console.log(add); // function add(a, b)
console.log(add(3, 5));  // 8

const add = a => a + 5;

console.log(add(3));  // 8
*/


/* 007 loading
// normal functions vs. fat arrow  --> this

let button = document.querySelector('button');

console.log(button);

function fn1() {
  console.log(this);
}

// button.addEventListener('click', fn1);

window.onload = function() {
  let button = document.querySelector('button');

  console.log(button);

  function fn1() {
    console.log(this);
  }

  button.addEventListener('click', fn1);

}
*/

/* 009  default argument value, undefined 및 some value
function isEqulTo(number, compare = 10) {
  return number === compare;
};

console.log(isEqulTo(5, 6));   // false
console.log(isEqulTo(5, 5));   // true
console.log(isEqulTo(5));   // false
console.log(isEqulTo(10));   // true

function isEqulTo(number, compare = 10) {
  console.log(number);  // 10
  console.log(compare);  // 10
  return number === compare;
};

console.log(isEqulTo(10));  // true

function isEqulTo(number = 10, compare = 10) {
  console.log(number);  // 10
  console.log(compare); // 10
  return number === compare;
};

console.log(isEqulTo());  // true

function isEqulTo(number = 10, compare = 10) {
  console.log(number);  // 5
  console.log(compare); // 10
  return number === compare;
};

console.log(isEqulTo(5));  // false

let a = 20;
function isEqulTo(number = 10, compare = a/2) {
  console.log(number);  // 10
  console.log(compare); // 10
  return number === compare;
};

console.log(isEqulTo(10));  // true

let a = 20;
function isEqulTo(number = 10, compare = number) {
  console.log(number);  // 10
  console.log(compare); // 10
  return number === compare;
};

console.log(isEqulTo(10));  // true

let a = 20;
function isEqulTo(number = 10, compare = number) {
  console.log(number);  // 10
  console.log(compare); // 10
  return number === compare;
};

console.log(isEqulTo());  // true

let a = 20;
function isEqulTo(number = 10, compare = number) {
  console.log(number);  // 5
  console.log(compare); // 5
  return number === compare;
};

console.log(isEqulTo(5));  // true

let a = 20;
function isEqulTo(number = compare, compare) {
  console.log(number);  // 15
  console.log(compare); // undefined
  return number === compare;
};

console.log(isEqulTo(15));  // false

let a = 20;
function isEqulTo(number = compare, compare) {
  console.log(number);  // error
  console.log(compare); // error
  return number === compare;
};

console.log(isEqulTo());  // error

let a = 20;
function isEqulTo(number, compare = number) {
  console.log(number);  // undefined
  console.log(compare); // undefined
  return number === compare;
};
// not even undefined, undefined, value allocated
console.log(isEqulTo());  // true
*/


/* 010 object literals 1
let name = 'Birdman';
let age = 30;

let obj = {
  // fields, properties = key + value
  name: 'Superman',
  age: 25
}

console.log(obj); // { name: 'Superman', age: 25 }

let obj = {
  // fields, properties = key + value
  name: name,
  age: age
}

console.log(obj);  // { name: 'Birdman', age: 30 }

let obj = {
  // fields, properties = key + value
  name,   // === name: name,
  age   // === age: age
}

console.log(obj);  // { name: 'Birdman', age: 30 }

let obj = {
  // fields, properties = key + value
  name: name,
  age: age,
  greet: function() {
    console.log('hello');
  }
}

console.log(obj.greet()); // hello 
                          //undefined

let obj = {
  // fields, properties = key + value
  name: name,
  age: age,
  greet() {
    console.log('hello');
  }
}

console.log(obj.greet()); // hello 
                          //undefined
*/


//* 011  object literals과 인용 부호
// let name = 'Birdman';
// let age = 30;

// let obj = {
//   //fields, properties = key + value
//   "name": name,
//   age: age,
//   "greet"() {
//     console.log('hello');
//   }

// }

// console.log(obj["name"]);
// console.log(obj["greet"]);  // [Function: greet]
// console.log(obj["greet"]());  // hello
