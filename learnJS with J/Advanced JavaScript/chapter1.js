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


// iterative 반복될 수 있는
function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
      result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

// Recursive 자기가 자기를 호출    ==> 메모리 과부하 가능성 high
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

//              if n==1  = x
//             /
/ /pow(x, n) =
//             \
//              else     = x * pow(x, n - 1)

// The execution stack => 메모리에 차곡차곡 저장
하나의 function이 하나의 stack data를 구성한다.
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
function pow(x, n) { // iterative 방식... => only one execution stack is made. 
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
      result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8

let company = { // the same object, compressed for brevity (서로 다른 구조를 갖고 있는 property, methods들일 때 iteration 사용할 수 없음. recursion만 쓸 수 있다는..)
  sales: [{ 
        name: 'John', 
        salary: 1000 
      }, { 
        name: 'Alice', 
        salary: 600 
      }],

  development: {
      sites: [{ 
          name: 'Peter',
          salary: 2000 
      }, { 
          name: 'Alex',
          salary: 1800 
      }],

  internals: [{ 
        name: 'Jack', 
        salary: 1300 
      }]
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

console.log(sumSalaries(company)); // 6700

*/

/* JS 72 - Recursive structures 을 활용해서
// Linked list를 만들어 낼 수 있다능... 
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


/* Exercise

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// 1. Using a for loop. Iteration
// 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1
// 3. Using the arithmetic progression formula.

function sumTo(n) {  }

alert( sumTo(100) ); // 5050

1. 반복문 사용하기:
function sumTo(n) {
    let sum = 0;
    for (let i = 0; i < n+1; i++) {    
        sum += i;
    }
    return sum;
};

sumTo(100); // 5050

2. 재귀 사용하기:
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );


더 생각해보기 1: 등차수열의 합공식을 사용하는 방법이 가장 빠릅니다. n에 관계없이 오직 세 개의 연산만 수행하면 되니까요. 수학은 항상 뭔가에 도움을 줍니다!

반복을 사용하는 방법은 두 번째로 빠릅니다. 재귀를 사용하는 방법과 반복문을 사용하는 방법 모두 같은 수의 숫자를 더하는 것에서 같지만, 재귀를 사용하는 방법은 중첩 호출과 실행 스택 관리가 추가로 필요하기 때문에 더 많은 자원을 소비합니다. 따라서 속도가 더 느리죠.

더 생각해보기 2: 몇몇 자바스크립트 엔진은 ‘tail call’ 최적화를 지원합니다. 위 함수 sumTo처럼 함수가 가장 마지막으로 수행하는 연산이 재귀 호출이라면 외부 함수는 실행을 다시 시작할 필요가 없기 때문에 엔진은 실행 컨텍스트를 기억할 필요가 없어집니다. 메모리 부담이 사라지는 거죠. 그렇기 때문에 sumTo(100000)같은 계산이 가능한 것입니다. 그런데 자바스크립트 엔진이 tail call 최적화를 지원하지 않는다면(대부분의 엔진이 이를 지원하지 않습니다) 엔진에 설정된 스택 사이즈 제한을 넘었기 때문에 최대 스택 사이즈 초과 에러가 발생합니다.


Calculate factorial
n! = n * (n - 1) * (n - 2) * ...*1
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

factorial(5) //120

function factorial1() { // Iteration
    
}
function factorial2() { // Recursion
    
}

팩토리얼은 그 정의에 따라 n!을 n * (n-1)!로 바꿔쓸 수 있습니다.

따라서 factorial(n)의 결과는 n과 factorial(n-1)의 결과를 곱한 값이 되겠죠. 함수의 인수는 n-1에서 1이 될 때까지 점점 줄어들 겁니다.

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

재귀의 베이스는 1로 잡았는데, 0이어도 상관은 없습니다. 0일 경우 재귀 단계가 하나 더 늘어난다는 것만 다릅니다.

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120


// Fibonacci numbers

// Fn = Fn-1 + Fn-2

function fib(n) { }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757


// Output a single-linked list

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

printList(list)

function printList_1() { //Iteration
    
}

function printList_2() { //Recursion
    
}


// Output a single-linked list in the reverse order

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

printList(list)

function printList_1() { //Iteration
    
}

function printList_2() { //Recursion
    
}

*/

/* JS 78 - Rest parameters

// https://javascript.info/rest-parameters-spread-operator
// Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.
// Object.assign(dest, src1, ..., srcN) – copies properties from src1..N into dest.
// …and so on.

function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );   // 3

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6


function showName(firstName, lastName, ...titles) {   // ...titles is an array.
  console.log(firstName + ' ' + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");


function showName() {  // arguments is a keyword of JS. and similar to array, but not. .
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");


function f() {
  let showArg = () => console.log(arguments[0]);
  showArg();
}

f(1); // 1

f(2, 3); // 2

// "this" keyword of an arrow function denotes its surrounding context(= execution stack). 
*/

/* JS 78 - Spread operator

let arr = [3, 5, 1];

console.log( Math.max(arr) ); // null

let arr = [3, 5, 1];

console.log( Math.max(3, 5, 1) ) // 5


let arr = [3, 5, 1];

console.log( Math.max(...arr) ); // 5


let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); // 8

let merged = [0, ...arr1, 2, ...arr2];
console.log(merged)   // [0, 1, -2, 3, 4, 2, 8, 3, -8, 1]


let merged = Math.max(0, ...arr1, 2, ...arr2);
console.log(merged)  // 8


let str = "Hello";   // string is an array of characters. 

console.log( [...str] ); // ["H", "e", "l", "l", "o"]
console.log( Array.from(str));  //  ["H", "e", "l", "l", "o"]
*/

/* JS 79 - learning closure

// https://javascript.info/closure

// Closure
let name = "John"; // binding means establishing a relation between a name an a value. 네임과 밸류 사이의 어떤 관계를 만드는 것을 바인딩이라고 함.

function sayHi() {  // Declaration
  console.log("Hi, " + name);
}

name = "Ju Peter";

sayHi(); // what will it show: "John" or "Peter"?    === Invoking, calling, executing a function.


function makeWorker() {
  let name = "Peter";

  return function() {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show? "Peter" (name where created) or "John" (name where called)? -> Peter

*/

/* JS 80 - Parsing (각 문장의 문법적인 구성 또는 구문을 분석하는 과정) 

// Lexical Environment is similar to execution stack(= context) of a function
// statement and expression . 
// let, const, function, class  are declarations. 

let name = "John";

function sayHi() {
  console.log("Hi, " + name);  // body
}

name = "Peter"; // (*)

sayHi(); // Peter 

// 자바스크립트가 위 식을 읽고 해석하는 과정을 살펴보자.

// one function call makes one execution stack .
// 한 함수를 실행할 때 하나의 execution stack을 만들어짐.
//  제일 먼저 만드는 것? => JS engine first makes a global context.
// Engine collects bindings(=declarations) in its direct scope. 
// Engine makes LE of the global ==> name, sayHi : parsing
// Parsing is to make global lexical environment. 
// Engine again makes LE and [[environment]] of each function or block. 

const list = {lexicalEnvironment: '', [[environment]]:{lexicalEnvironment:'', [[environment]]:{value: '', next: ''}}} 

// 렉시칼 엔바이러먼트 안에 바운딩이 있는 지 없는 지 이해해야

*/

/* JS 82 - Lexical Environment들의 계층 구조
// Nested functions => function이 function을 포함
function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );

}

// constructor function
// constructor function returns a new object
function User(name) {

  // the object method is created as a nested function
  this.sayHi = function() {
    console.log(name);
  };
}

let user = new User("John");
user.sayHi(); // the method "sayHi" code has access to the outer "name"


function makeCounter() {
  let count = 0;

  return function() {
    console.log(count)
    return count++; // has access to the outer counter
  };
}

let counter = makeCounter();

counter() // 0
counter() // 1
counter() // 2

// [[Environment]]는 그 둘러싸고 있는 함수(?) 를 말하는 듯.
  
// function를 호출하는 순간, 시점에.. 호출하면 그때마다 LE가 구성되는 것임.
// any new function call makes a brand new LE of it. 

// global LE: makeCounter, counter, [[Environment]]: null
// makeCounter LE: count, [[Environment]]: global
// counter LE: null,  [[Environment]]: makeCounter

*/

/* JS 83 - How Lexical Environments work
function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 0
counter1(); // 1
counter1(); // 2
counter1(); // 3


counter2(); // 0 or 4?   -> 0
*/

/* JS 84 - Garbage collection => 컴퓨터 자원을 아끼는 방법
// if, while, for makes its own LE.
for (let i = 0; i < 10; i++) {
  // Each loop has its own Lexical Environment
  // {i: value}
}

console.log(i); // Error, no such variable

//  Garbage collection

function f() {
  let value1 = 123;
  let value2 = 456;
}

f();

function f() {
  let value1 = 123;
  let value2 = 456;

  setTimeout(() => console.log(value1), 1000)
}

f();


function f() {
  let value = 123;

  return () => console.log(value); 
}

let g = f(); // g is reachable, and keeps the outer lexical environment in memory
g(); // LE

function f() {
  let value = Math.random();

  return function() { console.log(value); };
}

// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
//         LE   LE   LE
let arr = [f(), f(), f()];
arr[0]()
arr[1]()
arr[2]()
*/

/* JS 85 - Exercise: Counter object

// Counter Object 

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // ?    1 
console.log( counter.up() ); // ?    2
console.log( counter.down() ); // ?   1

// Function in if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();    // Hello, John


// sum(a)(b) = a+b
console.log(sum(1)(2)) // 3
console.log(sum(5)(-1)) // 4

function sum() {
  
}


// Filter through function
// .. your code for inBetween and inArray 
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(){
    
}
function inArray(){
    
}


// Sort by field
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);


users.sort(byField('name'));
users.sort(byField('age'));

function byField() {
  
}


// Army of functions
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // shooter function
      console.log( i ); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...
*/