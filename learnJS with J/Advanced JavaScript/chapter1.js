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