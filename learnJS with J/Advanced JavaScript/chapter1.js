/* JS 58 - Declare, Initialize, and Hoist

// declare 선언한다. initialze 초기화한다. 값을 할당한다.
let x; // declare
x = 3.14 // initialize

let x = 3.14 

myFunction();

function myFunction() {
  let y = 3.14;   // This will also cause an error because y is not declared
}

x = {p1:10, p2:20};      // This will cause an error

delete x;                // This will cause an error

function x(p1, p2) {}; 
delete x;                // This will cause an error 
*/


/* JS 59 - this Keyword
/*
In a method, "this" refers to the owner object.
Alone, "this" refers to null.
In a function, "this" refers to null.
In a function, in strict mode, "this" is undefined.
In an html event, "this" refers to the element that received the event.
Methods like call(), and apply() can refer "this" to any object.
*/

/*
// this 
// 대명사: 명사를 대신한 것. 지시는 가리키는 것.
// this가 가르키는 대상은 상황에 따라 결정. 

let x = this;  // JS replies that it doesn't know what this is.
console.log(x) // null

// JS languga Engine
function myFunction() {
  return this;
}
console.log(myFunction()) // null

// Context 상황 문맥

let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()) // John Doe

let person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  myFunction : function() {
    return this;
  }
};

console.log(person.myFunction()) // {firstName: "John", lastName: "Doe", id: 5566, myFunction: myFunction()}

function myFunction () {
  return this;
}

console.log(myFunction()) // null 

let person1 = { 
  firstName: "Team",
  lastName: "Jupeter",

  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(person1.fullName()) // Team Jupeter  => person(S) + fullName(V)  => OK

let person2 = {
  firstName: "John",
  lastName: "Doe",
}

console.log(person2.fullName()) // fullName is not a function     => Error

person1.fullName.call(person2);   // will return "John Doe"
// call 은 주어를 변경해주는 기능. => 새로운 주어를 만들어주는 것이 call의 기능
*/ 


/* JS 60 - declare, define, implement, side effect, returned value, object literal and object constructor

// declare: 무엇이 있다라고 선언
let x;
// define

x = "Jupeter"
// call: function을 실행하여 그 결과값(returned value)을 얻거나, 또는 side effects

// difference between side effects and returned value

// implement: function의 기능을 설명
function myFn() {
  console.log(x) // side effect
  return 42 // returned valued
}

console.log(myFn()) // call a function
 

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

let x = person;
x.age = 10;           // This will change both x.age and person.age

let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// declare: 무엇이 있다라고 선언
let x;
// define

x = "Jupeter"
// call: function을 실행하여 그 결과값(returned value)을 얻거나, 또는 side effects

// difference between side effects and returned value

// implement: function의 기능을 설명
function myFn() {
  console.log(x) // side effect
  return 42 // returned valued
}

console.log(myFn()) // call a function => 42
 

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

// let x = person;
// x.age = 10;           // This will change both x.age and person.age

// let person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";


// let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" } // object literal


// let x = person;
// x.age = 10;           // This will change both x.age and person.age

let person = new Object(); // constructor
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person.firstName)
*/

/* JS 61 - mutable, immutable, expression, and statement
let person = {fname:"John", lname:"Doe", age:25}; 

// expression and statement
// expression returns a value.  JS engine reads a sentence or a word, and returns a value. 

// 3 -> 3
// "Jupeter" -> "Jupeter"
// statement: if, for, while ...

let x = 3

objectName.property         // person.age
objectName["property"]      // person["age"]
objectName[expression]      // x = "age"; person[x]

let person = {fname:"John", lname:"Doe", age:25}; 

// expression and statement
// expression returns a value.  JS engine reads a sentence or a word, and returns a value. 

let x = "fname"
// 3 -> 3
// x -> 3 
// "Jupeter" -> "Jupeter"
// statement: if, for, while ...



console.log(person["fname"])
console.log(person.fname)
console.log(person[x])  // x is an expression
*/

/* 

let person = {fname:"John", lname:"Doe", age:25}; 


for (let x in person) {
  txt += person[x];
}

let person = {fname:"John"}; 

// term/name vs value
// object property can be called via term or value
for (let x in person) {
    console.log(x) // fname
    console.log(person.x)  // null
    console.log(person["x"])   // null
    console.log(person[x]) // John
    // if 1 is ok? then 2 is ok or vice versa 
    // if 1 is ok? then 3 is not ok, or vice versa.
    console.log(person.fname)  // John
    console.log(person["fname"])   // John
    console.log(person[fname])   // not defined
}


let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

person.nationality = "English";
delete person.age;   // or delete person["age"]; 

// JS is mutable. : object matched to a variable can be switched to another object
// no double declaration: let or const
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

person.nationality = "English";

console.log(person)

delete person.age;   // or delete person["age"]; 
console.log(person)

person = {name: "Jupeter"}
console.log(person)
*/

/* function declaration 
// function functionName(parameters) {
//   // code to be executed
// }

function myFunction(a, b) { // declare
  return a * b
}

// let a = myFunction(3, 4) // invoke, call
// console.log(a)

// function expression,
//  term = expression
// all expressions in JS are evaluated before assignment. 
// Evaluation means that JS reads words and calculate their values. 
// 
var x = function (a, b) {return a * b} //anonymous function
var y = "Jupeter" //anonymous function

console.log(y)



var z = x(4, 3) // call and assign

// console.log(z)


// // Self-Invoking Functions
// (function () {
//   let x = "Hello!!";      // I will invoke myself
// })();

// // Functions Can Be Used as Values
// function myFunction(a, b) {
//   return a * b;
// }

// let x = myFunction(4, 3);
// let x = myFunction(4, 3) * 2;


// // Functions are Objects
// function myFunction(a, b) {
//   return a * b;
// }

// let txt = myFunction.toString();

// // ES5
// let x = function(x, y) {
//   return x * y;
// }

// // ES6
// const x = (x, y) => x * y;
// const x = (x, y) => { return x * y };
*/


/* Functions Can Be Used as Values
function myFunction(a, b) {
  return a * b
}

let x = myFunction(4, 3)
let x = myFunction(4, 3) * 2

// value and object
// primitive data types are not object: 1, 2, 3, ...."Jupeter", true or false, symbol
// structured data types: object and array
// functions

// Functions are Objects
function myFunction(a, b) {
  return a * b
}

let txt = myFunction.toString()

// ES5
let x = function(x, y) {
  return x * y
}

// ES6
const x = (x, y) => x * y
const x = (x, y) => { return x * y };
*/

/* function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
}


// Parameter Defaults
function myFunction(x, y) { // declaration
    if (y === undefined) {
        y = 0;
    }
    return x + y
}

console.log(myFunction(3, 4))
console.log(myFunction(3))
console.log(myFunction(3, 4, 5))

function myFn(a = 1, b = 1) {
  return a * b + 5
}

console.log(myFn(3))
console.log(myFn(3, 5))
console.log(myFn())

// The Arguments Object
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max)
    // return max;
}

let x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    console.log(arguments)
}


// parameter and arguments

function myFn(a, b) { // a, b are parameters. abstract
  return a + b
}

myFn(3, 4) // 3, 4 are arguments. concrete

let x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    let i;
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(x)
*/



/* 
// // // Passed by Value
let x = 3
console.log(x)    // 3

function changeNum(a) {
  a = a * 3
  return a
}

console.log(changeNum(x)) // 9
console.log(x)   // 3 or 9 ??? -> 3


// // // Passed by Reference

let x = {
  name: "Jupeter",
  major: "JS",
  members: 42,
}

console.log(x)    // 3

function changeNum(a) {
  a.name = "Superman"
  return a
}

console.log(changeName(x)) // {name: "Superman", major: "JS", members: 42}
console.log(x)   // Jupeter or Superman ????  {name: "Superman", major: "JS", members: 42}
*/


/* Recursion and stack
// https://javascript.info/recursion

// Two ways of thinking
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16


// iterative
function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
      result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

// Recursive
function pow(x, n) {
  if (n == 1) {
      return x;
  } else {
      return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3)); // 8


pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2

// ternary operator
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

// Haskell

// The execution stack
*/


/* The execution stack = context = environment
function pow(x, n) {
  if (n == 1) {
      return x;
  } else {
      return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3));

// 3. call pow(2, 1) ==> Context: { x: 2, n: 1 }
// 2. call pow(2, 2) ==> Context: { x: 2, n: 2, at line 6 }
// 1. call pow(2, 3) ==> Context: { x: 2, n: 3, at line 2 }


// one function makes one execution stack
*/

/* Recursive traversals
function pow(x, n) { // only one execution stack is made. 
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
      result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8

let company = { // the same object, compressed for brevity
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
      sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
      internals: [{ name: 'Jack', salary: 1300 }]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
          sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
  }
}

alert(sumSalaries(company)); // 6700
*/

/* JS 72 - Recursive structures
// Linked list
let arr = [obj2, obj2_1, obj3, obj1000];
// pop, push, shift, unshift

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

console.log(list)   // {value: 1, next: {value: 2, next: {value: 3, next: {value: 4}}}}

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

console.log(list)  // {value: 1, next: {value: 2, next: {value: 3, next: {value: 4}}}}

let secondList = list.next.next;
list.next.next = null;
console.log(secondList)    // {value: 3, next: {value: 4}}
console.log(list)   // {value: 1, next: {value: 2, next: null}}

// prepend the new value to the list
list = { value: "new item", next: list };
console.log(list)   // {value: "new item", next: {value: 1, next: {value: 2, next: null}}}
*/