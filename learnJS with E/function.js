// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// Function
// - fundamental building block in the program  프로그램 값의 기본 구성 요소
// - subprogram can be used multiple times  여러 번 사용할 수 있습니다
// - performs a task or calculates a value  작업을 수행하거나 값을 계산합니다.

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello();  // Hello

function log(message) {
  console.log(message);
}
log('Hello@');   // Hello@
log(1234);  // 1234

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');   // Hi! by unknown

function showMessage(message, from)  {
  if (from === undefined) {
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');   // Hi! by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);   // dream, coding, ellie
  }

  for (const arg of args) {   // for .. of
    console.log(arg);  // dream, coding, ellie
  }

  args.forEach((arg) => console.log(arg));   // dream, coding, ellie
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable   // hello
  console.log(globalMessage);     // global
  function printAnother() {
    console.log(message);    hello 
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error 
  // 이 함수는 return type이 없음. 이는 return undefined이 들어가 있는 것과 똑같은 의미.
}
printMessage();  // hello, global

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);   // sum: 3

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }   // block quote 안에서 logic을 많이 작성하게되면 가독성이 떨어져서 bad
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }   // 조건이 맞지 않을 때는 빨리 return을 해서 함수를 종료하고, 조건이 맞을 때만 그 다음에 실행되야하는 logic들을 쭉 실행하는 것이 더 좋다.
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable  함수는 다른 변수처럼 취급됩니다.
// can be assigned as a value to variable  변수에 값으로 할당 될 수 있습니다.
// can be passed as an argument to other functions.  다른 함수에 인수로 전달할 수 있습니다.
// can be returned by another function 다른 함수에 의해 return 될 수 있습니다.

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.   function expression은 할당된 다음부터 호출이 가능하다.
const print = function () { // anonymous function  ==>  () 가 빈 함수.
  console.log('print');
};
print();      // print 
const printAgain = print;
printAgain();  // print
const sumAgain = sum;
console.log(sumAgain(1, 3));    // 4
// function expression은 할당된 다음부터 호출이 가능한 반면에 function declaration은 hoisting가 된다. 그 말은, 함수가 선언되기 이전에 호출해도 가능하다는 것이다. 이것은 Javascript가 선언된 것은 제일 위로 올려주기 때문.

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions(반복, 되풀이)
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);  // no!
randomQuiz('love you', printYes, printNo);  // yes!

// Arrow function
// always anonymous   // anonymous function  ==>  () 가 빈 함수.
const simplePrint = function () {
  console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;    // 두 줄 이상일 때에는 return을 써줘야 한다.
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();    // IIFE

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}
console.log(calculate('add', 2, 3));  // 5

