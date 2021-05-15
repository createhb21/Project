/* JS 91 - Functions have properties

// Function object, 
function sayHi() { // function is an object. 
  console.log("Hi");
}

console.log(sayHi.name); // sayHi
console.log(sayHi); // sayHi()


const sayHi = function() { // function is an object. 
  console.log("Hi");
}

console.log(sayHi.name); // sayHi
console.log(sayHi); // sayHi


let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye

// function created inside array
let arr = [function() {}];

console.log( arr[0].name ); // <empty string>
// the engine has no way to set up the right name, so there is none

function myFn() {
  
}

console.log(myFn.name)  // myFn


function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

// all functions have name and lenght properties. 
// properties(including methods) vs. lexical environment
*/


/* JS 92 - Polymorphism
function ask(question, ...handlers) {
  let isYes = confirm(question);  // variables(=bindings) vs. properties. 


  for(let handler of handlers) {
    if (handler.length == 0) {  // the length of a function is the number of its aruments. 
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask("Question?", () => console.log('You said yes'), result => console.log(result));
*/


/* JS 93 - Lexical environment of a function
function sayHi() {
  console.log("Hi");

  // let's count how many times we run
  sayHi.counter++;  // property of the function sayHi
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

console.log( `Called ${sayHi.counter} times` ); // Called 2 times

// lexical scope or lexical environment
// property

function makeCounter() {
  let count = 0;  // data which will be embedded into the LE of makeCounter()
  
  
  return function() {
    console.log(count)
    return count++
  }
}

let myCounter = makeCounter();
myCounter();  // 0
myCounter();  // 1
myCounter(); // 2
myCounter();  // 3
*/


/*  JS 94 - A property is not a variable
function makeCounter() {
  // instead of:
  // let count = 0 // bindings in a functon can't be seen outside the function . 

  function counter() {
    console.log(counter.count)
    return counter.count++;
  };

  counter.count = 0; // property of counter function

  return counter;
}

let counter = makeCounter();
counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5
*/