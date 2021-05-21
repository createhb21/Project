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

  sayHi() {   // Methods
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
function many(a, b, ...more) {}   // rest parameter는 length에 안들어간다.

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

// all functions have name and lenght properties. 
// properties(including methods) vs. lexical environment
*/


/* JS 92 - Polymorphism
// argument의 type이나 length 에 따라서 실행되는 코드내용이 달라지는 것.
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
// property를 사용..
function makeCounter() {
  // instead of:
  // let count = 0 // bindings in a functon can't be seen outside the function . 

  function counter() {
    console.log(counter.count)
    return counter.count++;
  };  // property 는 밖에서 볼 수 있음.

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

property는 function의 외부에서도 볼 수 있고 조작할 수도 있다.
그런데 
binding(= variable)은 function 외부에서 접근할 수가 없음.
*/


/* 95 - Hoist
// Named Function Expression(NFE)


function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
alert( counter() ); // 10
*/


/* JS 96 - Expressions vs Statements

// Named Function Expression(NFE)
// statement vs expression
let sayHi = function(who) { // assignment expression
  alert(`Hello, ${who}`);
};

let x, y; // declartion = statement
function myFn() {
  
}  // statement

if, for, while. ....  // statement
x = 3 // assignment expression
3; // expression
x; // expression
3 + 3; // expression

y = 1; 
y = 1 + 1; 
y = 1 + x; 
y = x; 
y = 1; 
let z = 2; // statement

// expression is everything which can be shown at the right side of =, and which can be converted to a value. 
*/

/* JS 97 - Named Function Expression

// anonymous function expression
let sayHi = function(who) {
  console.log(`Hello, ${who}`);
};  

sayHi("John"); // Hello, John


// Named Function Expression
let sayHi = function myFn(who) {
  console.log(`Hello, ${who}`);
};


let sayHi = function func(who) {   // recursion
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};

sayHi(); // Hello, Guest
sayHi('Jupeter'); // Hello, Jupeter

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)


function func(who) {   // recursion
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // use func to re-call itself
  }
};


func(); // Hello, Guest
func('Jupeter');  //  Hello, Jupeter
*/

/* JS 98 - Exercise: Set and decrease for counter

// write makeCounter()

// counter() should return the next number (as before).
// counter.set(value) should set the count property to value.
// counter.decrease() should decrease the count by 1.
*/


/* JS 99 - Exercise: Sum with an arbitrary amount of brackets

// write sum()
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/




/* JS 100 - Decorator function
// Decorators and forwarding, call/apply
//* Transparent caching
// Decorator


function slow(x) {  // identity function
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}
// pure function means when there are same arguments, then the same result returns. 

function cachingDecorator(func) {
  let cache = new Map();   // key, value

  return function (x) {
      if (cache.has(x)) { // if the result is in the map
          return cache.get(x); // return it
      }

      let result = func(x); // otherwise call func

      cache.set(x, result); // and cache (remember) the result
      return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) is cached
console.log("Again: " + slow(1)); // the same

console.log(slow(2)); // slow(2) is cached
console.log("Again: " + slow(2)); // the same as the previous line

// */


/* JS 101 - call = 주어와 동사

// Decorators and forwarding, call/apply
//* Transparent caching
// Decorator
// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // actually, there can be a scary CPU-heavy task here
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)  주어를 만들어줘야한다.
  }
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}
// S = worker, V = slow
// "this" keyword in V denotes S. 
console.log( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log( worker.slow(2) );


// this는 주어가 있어야 한다. worker.slow에서 주어는 worker. 동사는 slow.
// 동사에 포함되있는 this는 주어를 지칭한다. 
// this는 항상 주어가 지칭되어야 한다는 것.


// <주어를 만들어줘야한다.>
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // actually, there can be a scary CPU-heavy task here
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // (**)
    cache.set(x, result);
    return result;
  };
}

console.log( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log( worker.slow(2) );

// 혹은

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    
    // worker.slow = func
    // let result = worker.slow(x); // (**)
    let result = func.call(this, x)
    cache.set(x, result);
    return result;
  };
}

console.log( worker.slow(1) ); // the original method works

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log( worker.slow(2) );

// 정상적으로 동작함
*/

/* JS 103 - call and apply

// argumnet가 여러개인 경우
func(1, 2, 3);
func.call(obj, 1, 2, 3)



function sayHi() {
  console.log (this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };


sayHi("Jupeter")
// use call to pass different objects as "this"
sayHi.call( user ); // this = John,  this.name = "John"
sayHi.call( admin ); // this = admin, this.name = "Admin"


function say(phrase) {
  console.log(this.name + ': ' + phrase);
}

let user = { name: "John" };

// user becomes this, and "Hello" becomes the first argument
say.call( user, "Hello" ); // John: Hello


let worker = {
  slow(min, max) {
    return min + max; // scary CPU-hogger is assumed
  }
};

// should remember same-argument calls
worker.slow = cachingDecorator(worker.slow);



function say(time, phrase) {
  console.log(`[${time}] ${this.name}: ${phrase}`);
}

let user = { name: "John" };

let messageData = ['10:00', 'Hello']; // become time and phrase

// user becomes this, messageData is passed as a list of arguments (time, phrase)
say.apply(user, messageData); // [10:00] John: Hello (this=user)

// apply makes spread parameters. 

say.call(user, ...messageData);  // [10:00] John: Hello (this=user)
// 인위적으로 ... 을 사용해줘야 한다.
*/

/* JS 104 - Method Borrowing
let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map(); // key + value
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
} 
// function hash(args) { // but arguments is not an array. 
//   return args.join();
// }

// function hash() {
//   return [].join.call(arguments); // 1,2   // method borrowing
// }

// hash(1, 2);

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works
console.log( "Again " + worker.slow(3, 5) ); // same (cached)
*/

/* JS 105 - Exercise: Spy decorator
// https://javascript.info/call-apply-decorators
function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}


function spy(fn) {
  // your code here
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
*/

/* JS 106 - Exercise: Delaying decorator

// https://javascript.info/call-apply-decorators
function f(x) { // identity function 
  console.log(x);
  return x;
}

function delay(f, ms) {
  // your code here
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms
*/

/* JS 107 - Exercise: Debounce decorator
// https://javascript.info/call-apply-decorators
let f = debounce(console.log, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
setTimeout( () => f(4), 1100); // runs
setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)
*/

/* JS 108 - Side effects
// https://javascript.info/bind
// Function binding
// Losing “this”

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

// user.sayHi()
// setTimeout(user.sayHi, 1000); // Hello, undefined!  // S = browser or window or node
// setTimeout(() => user.sayHi(), 1000); // 

let myFn = user.sayHi;
myFn(); // (*) 주어가 없다. 

// 해결방법
setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);

setTimeout(() => user.sayHi(), 1000); // Hello, John!

// 이경우는?

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000);

// ...within 1 second
user = { sayHi() { console.log("Another user in setTimeout!"); } };
// Another user in setTimeout!

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

user.sayHi.call(user);  // Hello, John!
setTimeout(() => user.sayHi.call(user), 1000) // Hello, John!

let myFn = user.sayHi.call(user)   // evaluation

console.log(myFn); // null   // why? user.sayHi.call(user)  doesn't return value..
myFn() // ›TypeError: myFn is not a function 
// function이 return하는 것과 화면에 출력(console)되는 것은 다르다는 것.

function fn1() {
  console.log(1)
}
function fn2(x) {
  console.log(2)
  return x
}

let myFn1 = fn1();   // console.log(1)
let myFn2 = fn2();   // console.log(2)

console.log(myFn1);  // null
console.log(myFn2);  // null


function fn1(x) {
  console.log(1)    // side effects
}
function fn2(x) {
  console.log(2)  // side effects = function이 return하는 값 외에 다른 어떤 일련의 변화나 화면에 출력을 하거나 데이터를 주고받거나 인터넷에 접속하는 것 몽땅 side effects라 함.
  return x
}

let myFn1 = fn1(3); // console.log(1)
let myFn2 = fn2(3); // console.log(2)

console.log(myFn1);   // null
console.log(myFn2);  // 3
*/

/* JS 109 - Binding

let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

// setTimeout(() => user.sayHi.call(user), 1000)
let myFn = user.sayHi.call(user) // evaluation
console.log(myFn) // null
// call은 즉시 쓸 수 있는 기능. 저장하는 것이 아님. 나중에 어떻게 할 수 있는 게 아님. apply도 마찬가지. 이 대신에 bind를 쓰면 저장하고 나중에 갖다 쓸 수 있음.

let user = {
  firstName: "John"
};

function func() {
  console.log(this.firstName);
}


// user.func()
// func.call(user) // 동작은 하지만 변수에다가 담아놓을 수 없음 
// 그런데 담아 놓는 방법이 바로 bind이다. 
let funcUser = func.bind(user);
funcUser(); // John
// 이것이 call과 bind의 차이점


let user = {
  firstName: "John"
};

function func(phrase) {
  console.log(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)


let user = {
  firstName: "John",
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}!`);
  }
};

let say = user.say.bind(user);

say("Hello"); // Hello, John ("Hello" argument is passed to say)
say("Bye"); // Bye, John ("Bye" is passed to say)




let user = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};

// bindAll
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
*/

/* JS 110 - Exercise: Bound function as a method

function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g(); // ???
*/

/* JS 111 - Exercise: Second bind

function f() {
  console.log(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();
*/


/* JS 112 - Exercise: Function property after bind
function sayHi() {
  console.log( this.name );
}

sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

console.log( bound.test ); // what will be the output? why?
*/


/* JS 113 - Exercise: Ask losing this

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk, user.loginFail);
*/


/* JS 114 - Currying and partials

// https://javascript.info/currying-partials
// Currying and partials
// partial function application 
// let bound = func.bind(context, arg1, arg2, ...);  // context = S
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2); // S = null. 주어가 없다.

console.log(double(3));  // 6
console.log(double(4));   // 8
console.log(double(5));   // 10
console.log(double(6));   // 12  


function mul(a, b, c) {
  return a + b + c;
}

let double = mul.bind(null, 2); // S = null. 주어가 없다. 

console.log(double(3, 5));  // 10
console.log(double(4, 7));   //13



function mul(a, b, c) {
  return a + b + c;
}

let double = mul.bind(null, 2, 7); // S = null. 주어가 없다. 

console.log(double(5));  // 14
console.log(double(7));   // 16



function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);  // S = this,  
  }
}
// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// add a partial method that says something now by fixing the first argument
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// Something like:
// [10:00] John: Hello!

// partial은 기본적으로 arguments를 두 그룹으로 나눈 것. 갯수에 제한은 x .
// partial is related to S whether S is null or not(for example, this)

// Currying focuses only on arguments. 
function curry(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let carriedSum = curry(sum);

console.log( carriedSum(1)(2) ); // 3
console.log( sum(3, 4) ); // 7



function curry(f) {
  return function(...args) {
    // if args.length == f.length (as many arguments as f has),
    //   then pass the call to f
    // otherwise return a partial function that fixes args as first arguments
  };
}
*/


/* JS 115 - Currying and partials
import * as _ from 'lodash'; // ES6

function curry(f) {
  return function(...args) {
    // if args.length == f.length (as many arguments as f has),
    //   then pass the call to f
    // otherwise return a partial function that fixes args as first arguments
  };
}

function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log = _.curry(log);

log(new Date(), "DEBUG", "some debug");

// todayLog will be the partial of log with fixed first argument
let todayLog = log(new Date());

// use it
todayLog("INFO", "message"); // [HH:mm] INFO message

let todayDebug = todayLog("DEBUG");

todayDebug("message"); // [HH:mm] DEBUG message



function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(null, args);  // this를 굳이 넣을 필요가 없음. 
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

// still callable normally
console.log( curriedSum(1, 2, 3) ); // 6

// get the partial with curried(1) and call it with 2 other arguments
console.log( curriedSum(1)(2,3) ); // 6

// full curried form
console.log( curriedSum(1)(2)(3) ); // 6
*/

/* JS 117 - Exercise: Partial application for login
// Currying focuses only on arguments. 
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

// What to pass askPassword in the code below, so that it calls 
// user.login(true) as ok and user.login(false) as fail?
askPassword(() => user.login(true), () => user.login(false)); // ?

// partial application 
askPassword(?, ?); // ?
*/


/* JS 118 - Arrow functions revisited(주의: 고급 과정)
// https://javascript.info/arrow-functions
// Arrow functions revisited
// Arrow functions have no “this”
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      alert(this.title + ': ' + student)
    });
  }
};

group.showList();



let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    console.log(this);
    this.students.forEach( (student) =>
      console.log(this)
      // Error: Cannot read property 'title' of undefined
      // alert(this.title + ': ' + student)
    );
  }
};

group.showList();

// arrow function은 자체 this가 없음. new, bind 도 쓸 수 없다.
// Arrow functions have no “this”, new, bind
// myFn.bind(null, arg...)
// myFn.bind(this, arg...)

function myFn(arg) {
  this.name = arg;
}

let myVar = new myFn("Jupeter")

console.log(myVar.name) // Jupeter



function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(null, arguments), ms)  // null .. 주어 없이 쓰겠다.
  };
}

function sayHi(who) {
  console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds
*/

/* JS 119 - Arrow functions revisited(주의: 고급 과정)
// Arrow functions revisited
// Arrow functions have no “this”, new, bind, argumnets


function defer(f, ms) {
  return function() {
    setTimeout(f, ms)
  };
}

function sayHi(who) {
  console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, undefined after 2 seconds



function defer(f, ms) {
  return function(arg) {
    setTimeout(f(arg), ms)
  };
}

function sayHi(who) {
  console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds



function myFn(arg1, arg2) {
  console.log(arguments);
  return arg1 + arg2
}

myFn(3, 4)   // {0: 3, 1: 4}



let myFn = (arg1, arg2) => {
  console.log(arguments);
  return arg1 + arg2
}

myFn(3, 4)  // ›SecurityError: Blocked a frame with origin "https://run.scrimba.com" from accessing a cross-origin frame. (/index.js:9)


let myFn = (arg1, arg2) => {
  // console.log(arguments);
  return arg1 + arg2
}

console.log(myFn(3, 4))  // 7
*/


/* Advanced JS 120 - Generators
// http://javascript.info/generators
// Generator

function* generateSequence() {  // factory function
  console.log('Hi');
  yield 1;
  yield 2;
  return 3;
}

// generateSequence(); 
// "generator function" creates "generator object"
let generator = generateSequence();
console.log(generator);  // Object [Generator] {}
// console.log(generator.next());  // 
// console.log(generator.next());  // 
// console.log(generator.next());  // 
// console.log(generator.next());  // 




function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
console.log(generator);  // Object [Generator] {}
for(let value of generator) {  // for...of... => object의 값들을 불러올 때 사용. generator은 object..
  console.log(value); // 1, then 2
}
// generator must be an iterable.



// iterable
let range = {
  from: 1,
  to: 5,

  // for..of range calls this method once in the very beginning
  [Symbol.iterator]() {   // 하나하나씩 알맹이를 들여다볼 수 있는 것
    // ...it returns the iterator object:
    // onward, for..of works only with that object, asking it for next values
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for..of loop
      next() {
        // it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// iteration over range returns numbers from range.from to range.to
// spread operator is applied to iterables like arrayes.
console.log([...range]); // [ 1,2,3,4,5 ]
console.log(...range); //  1,2,3,4,5 



function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}


console.log([...generateSequence(1,5)]);  // [1, 2, 3, 4, 5]
console.log(...generateSequence(1,5));  // 1, 2, 3, 4, 5
*/


/* Advanced JS 121 Generators
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log( [...range] ); // [1,2,3,4,5]
// generator 자체가 iterator object라는 것..


let range = {
  from: 1,
  to: 5,

  // for..of range calls this method once in the very beginning
  [Symbol.iterator]() {   // 하나하나씩 알맹이를 들여다볼 수 있는 것
    // ...it returns the iterator object:
    // onward, for..of works only with that object, asking it for next values
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for..of loop
      next() {
        // it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// 위 3 식 모두 같은 결과.
// generator 자체가 iterator object라는 것.. 
// generator는 iterable를 다루는 한가지 방식..
*/


/* Advanced JS 122 Generator of generators

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {  // iterable, next()
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z



function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

  // yield* generateSequence(48, 57);
  for (let i = 48; i <= 57; i++) yield i;

  // yield* generateSequence(65, 90);
  for (let i = 65; i <= 90; i++) yield i;

  // yield* generateSequence(97, 122);
  for (let i = 97; i <= 122; i++) yield i;

}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z
*/


/* Advanced JS 123 - yield returns nothing
// two way cummunication

function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2?"; // (*)
  console.log(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value
console.log(question);  // 2 + 2?

generator.next(4); // 4  //  --> pass the result into the generator
generator.next(); // undefined


// 중요.... 
function* gen() {
  // yield produces side effect only.
  let ask1 = yield "2 + 2?";  // evaluating left side of "="

  console.log(ask1); // 4

  let ask2 = yield "3 * 3?"

  console.log(ask2); // 9
}

let generator = gen();

console.log( generator.next().value ); // "2 + 2?"

console.log( generator.next(4).value ); // "3 * 3?"

console.log( generator.next(9).done ); // true
*/

/* Advanced JS 124 - why we need generators
// http://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

function * generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, ';   // Line 2
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4 // This will be executed first., Hello, 
console.log(generatorObject.next().value); // Line 5 // I will be printed after the pause, World!
console.log(generatorObject.next().value); // Line 6  // undefined
// This will be executed first.
// Hello, 
// I will be printed after the pause
// World!
// undefined


// yield is not "return", the are diffrent.
function *  generatorFunc() {
  yield 'a';
  return 'b'; // Generator ends here.
  yield 'a'; // Will never be executed. 
}


// Exercise 1 : rewrite using a generator
const iterableObj = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: 'This', done: false};
        } else if (step === 2) {
          return { value: 'is', done: false};
        } else if (step === 3) {
          return { value: 'iterable.', done: false};
        }
        return { value: '', done: true };
      }
    }
  },
}
for (const val of iterableObj) {
  console.log(val);
}
// This
// is 
// iterable.

// Here's the same thing using generators --
function * iterableObj() {
  yield 'This';
  yield 'is';
  yield 'iterable.'
}
for (const val of iterableObj()) {
  console.log(val);
}
// This
// is 
// iterable.


// functional programming with using generator
// Infinite Data Streams
function * naturalNumbers() {
  let num = 1;
  while (true) {
    yield num;
    num = num + 1
  }
}
const numbers = naturalNumbers();
console.log(numbers.next().value)  // 1
console.log(numbers.next().value)  // 2
console.log(numbers.next().value) // 3
console.log(numbers.next().value)  // 4
console.log(numbers.next().value)  // 5
console.log(numbers.next().value)   // 6
// 1
// 2
*/


/* about genearators...... keep going.

*/


/* JS 127 - Property getters and setters
// https://javascript.info/property-accessors
// Property getters and setters
// promise, observables, async/await ...

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

console.log(user.name); // John
console.log(user.surname); // Cooper


// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper


let user = {
  name: "John",
  surname: "Smith",

  get fullName() {  // read data 
    return `${this.name} ${this.surname}`;
  },

  // set fullName(value) {
  //   [this.name, this.surname] = value.split(" ");
  // }
};

console.log(user.name); // John
console.log(user.surname); // Smith
console.log(user.fullname); // John Smith

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper



let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Name is too short...
*/


/* JS 128 - Property getters and setters
// https://www.youtube.com/watch?v=_DLhUBWsRtw&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=6
// 9분 45초부터 getter & setter 설명
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let john = new User("John", 25);

// console.log( john.age ); // 25


// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
// }

// let john = new User("John", new Date(1992, 6, 1));


function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

console.log( john.birthday ); // birthday is available
console.log( john.age );      // ...as well as the age
*/

/* JS 129 - Prototypal inheritance
// methods 는 공유 되지만 object는 공유되지 않는다.
// Prototypal inheritance
// As a result, methods are shared, but the object state is not.
let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true
// rabbit의 proto를 animal로 설정하면 rabbit은 animal이 가지고 있는 모든 것을 다 쓸 수 있게 된다.
// 이걸 Prototypal inheritance라고 부른다.

let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};        

let rabbit = {
  jumps: true,
  __proto__: animal   // 아예 여기서 proto를 animal로 할당. 위와 동일한 결과를 낳음.
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk



let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)



let animal = {
  eats: true,
  walk() {
    // this method won't be used by rabbit // 
    console.log("Animal! Bounce-bounce!");
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
};

rabbit.walk(); // Rabbit! Bounce-bounce! 
// 자기 것이 있으면 자기 걸 쓰고 자기 것이 없으면 부모 것을 쓴다. 부모 것이 없으면 할머니 것을 쓴다.



let user = {
  name: "John",
  surname: "Smith",
  
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**) 
console.log(user.fullName); // John Smith

// 만약에 this를 사용하게 되면?
// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
    // console.log(this.isSleeping)   // true
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // null (no such property in the prototype)
*/


/* JS 130 - Exercise: Working with prototype
// https://javascript.info/prototype-inheritance
// Prototypal inheritance
// Working with prototype
let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // ? (1)  true

delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (2)    null

delete animal.jumps;

console.log( rabbit.jumps ); // ? (3)    undefined
*/


/* JS 131 - Exercise: Searching algorithm
// https://javascript.info/prototype-inheritance
// Prototypal inheritance
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).

2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
*/


/* JS 132 - Exercise: Where it writes?
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
console.log(animal.full) // ?   undefined
console.log(rabbit.full) // ?   true
*/


/* JS 133 - Exercise: Why two hamsters are full?
// https://javascript.info/prototype-inheritance
// Prototypal inheritance
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple    => null이 되도록 재구성해라.
// 잘못 된것을 바로 잡아봐라.
*/
