/* 94. has(), for of loop
    
let set1 = new Set(); 
  
// adding element to the set 
set1.add(50); 
set1.add(30); 
              
// prints true 
console.log(set1.has(50)); // true
  
// prints false 
console.log(set1.has(10)); // false

//*/

/*
let set1 = new Set(); 
  
// adding element to the set 
set1.add(50); 
set1.add(30); 
set1.add(40); 
set1.add("Geeks"); 
set1.add("GFG"); 
  
// getting all the values 
let getValues = set1.values(); 
  
// prints a SetIterator 
// that contains {50, 30, 40, "Geeks", "GFG"} 
// console.log(getValues); // {}

// for ... in ==> object의 key: value 조합에서, key를 가져올 때
// for ... of ==> value를 보여주는 loop
// forEach ==> array에 적용
for(let value of getValues) {
  console.log(value);
}   // 50, 30, 40, Geeks, GFG 
  
// getting all the values 
let getKeys = set1.keys(); 
  
// prints a SetIterator 
// that contains {50, 30, 40, "Geeks", "GFG"} 
console.log(getKeys); 
for(let key of getKeys) {
  console.log(key);
}  //  50, 30, 40, Geeks, GFG 
// Set은 key와 value 가 같은 data가 들어간다. 
// key를 뽑으나 value를 뽑으나 같은 data가 뽑힌다.
//*/

/* 95. set, array and forEach 
let set1 = new Set(); 
  
// adding element to the set 
set1.add({Firstname: "Sumit", Lastname: "Ghosh"}); 
set1.add(50); 
set1.add(30); 
set1.add(40); 
set1.add("Geeks"); 
set1.add("GFG"); 
  
// Declaring a call back function 
// we are using only one parameter value 
// so it will ignore other two . 
function printOne(values) 
{ 
    console.log(values); 
} 

// It prints value of all the element  
// of the set
// forEach는 array를 위한 method. == set이 곧 array. 
set1.forEach(printOne);  // {Firstname: "Sumit", Lastname: "Ghosh"}, 50, 30, 40, Geeks, GFG


// Declaring a call back function 
// we are using two parameter value 
// so it will ignore last one  
function printTwo(key, values) 
{ 
    console.log(key+" "+values); 
} 
  
// As key and values are same in set 
// so it will print values twice 
set1.forEach(printTwo); // [object Object]  [object Object], 50  50, 30  30, 40  40, Geeks  Geeks, GFG  GFG


const a = [2, 3, 4, 5];  // 눈에 보이지않는 key가 들어가 있음 .
// 0 1 2 3 순으로 key가 할당된다.
// Set은 value 자체가 바로 key로 동일하게 할당된다
// 그니까 Set에서는 Object도 key가 될 수 있고 number도 key가 될 수있고 string도 key가 될 수 있다는 거죵 

a.forEach(printOne);  // 2, 3, 4, 5
a.forEach(printTwo); // 0 2, 1 3, 2 4, 3 5
*/

/* 96. Decorators and forwarding, call/apply
// 1
// Functional programming
// Pure(순수) function vs. impure function
// pure function == when input is the same, the return value also should be same.
// f(x) => x + 1; // pure function
// g(x) => random(x); // impure function (ex. 주사위 굴리는 횟수의 평균값을 return해라) => 들어가는 input값은 똑같이 3이지만 return값은 다 다를수밖에 없음.

function slow(x) {  // identity function
  // there can be a heavy CPU-intensive job here(가정)
  console.log(`Called with ${x}`);  
  return x;    
}

// decorator
// higher order function
function cachingDecorator(func) {
  // Closure
  let cache = new Map();

  //wrapper
  return function(x) {
    if (cache.has(x)) { // if the result is in the map
      return cache.get(x); // return it 
    }
    let result = func(x); // otherwise call func     => // Called with 1, 1

    cache.set(x, result); // and cache (remember) the result   (1, 1)
    return result;    // 1
  };
}

let slowFn = cachingDecorator(slow); 

console.log( slowFn(1) ); // slowFn(1) is cached // Called with 1, 1
console.log( "Again: " + slowFn(1) ); // the same  // Again 1

console.log( slowFn(2) ); // slowFn(2) is cached  // Called with 2, 2
console.log( "Again: " + slowFn(2) ); // the same as the previous line  // Again 1


// 2
// we'll make worker.slow caching
let worker = {
  someMethod() {
    return 3;
  },

  slow(x) {
    // actually, there can be a scary CPU-heavy task here
    console.log("Called with " + x);    //  Called with 2
    // return x * worker.someMethod(); // 6  OK
    return x * this.someMethod(); // (*)  this가 문제...
    // return x * 5; // OK
  }
};

// same code as before
function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }


    let result = func(x); // (**)
    cache.set(x, result);   
    return result;    
  }; 
}

console.log(worker.slow(1)); // the original method works   // Called with 1, 3

worker.slow = cachingDecorator(worker.slow);
console.log(worker.slow(2)); // Whoops! Error: Cannot read property 'someMethod' of undefined
console.log(worker.slow(2)); 

// 주어 + 동사 => Object.function()
// 영어에서 대명사(this, that, he, she, they)가 만약 주어가 없으면, 일반인 또는 일반적인 대상
// 주어가 없는 function() 내부의 this는 일반인 == 가장 큰 object == window == global object
// 가장 바깥에 있는 scope는 window == global object.
//*/



/* 97 - Call
// 1
function sayHi() {
  console.log(this.name);
} 

let user = { name: "John" };
let admin = { name: "Admin" };

user[`sayHi`] = sayHi;
user[`sayHi`](); // John

admin[`sayHi`] = sayHi;
admin[`sayHi`](); // Admin

// 위 4줄을 한줄 한줄 즉 두줄로 표현해라! 는 밑 두줄.

// use call to pass different objects as "this"
sayHi.call( user ); // John = this    user라는 object에 sayHi라는 function을 add하고 실행.
sayHi.call( admin ); // Admin = this    admin이라는 object에 sayHi라는 function을 add하고 실행.

// /* 98. call 한 걸음 더
//2
function say(phrase) {
  console.log(this.name + ': ' + phrase);   
}

let user = { name: "John" };

// // user becomes this, and "Hello" becomes the first argument
say.call( user, "Hello" ); // John: Hello     user라는 object에 say라는 function을 넣고 argument에 "hello"를 넣고 실행.

//3
let worker = {                 // Object
  someMethod() {
    return 3;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {             // Function
  console.log(func); // f slow()
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x);
//      // "this" is passed correctly now   this라는 object에 func이라는 function을 넣고 x라는 argument를 넣어서 실행. 여기서 func = slow 이고, x는 2
    // let result = func(x);
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching  
// function cachingDecorator이 worker.slow에 들어감 -> function(x)이 들어가는 자리는 정확히 worker object의 slow라고 하는 key에 담기게 된다. slow라고 하는 key가  function(x)을 가리케기 되는 것. 그럼 이 function(x)의 주어는 누구인가? 바로 worker이다. 이 function(x)의 주어가 worker라는 것을 알려주는 것이 바로 this. 주어와 동사를 어울리게 해주는 방식이 func.call(this, x); 

console.log( worker.slow(2) ); // works     // Called with 2, 6
console.log( worker.slow(2) ); // works, doesn't call the original (cached)  // 6
*/


/* 99. arguments and apply
// 1 
function say(time, phrase) {
  // console.log(arguments); // scope가 구성될 때, 자동으로 설정되는 이름 중 하나.// {0: Array[2]}
  // console.log(arguments[0]); // ["10:00". "Hello"] 
  // console.log(arguments[1]); // undefined
  console.log(`[${time}] ${this.name}: ${phrase}`);
}

let user = { name: "John" };    // Object

let messageData = ['10:00', 'Hello']; // become time and phrase

// user becomes this, messageData is passed as a list of arguments (time, phrase)
say.call(user, messageData); // [10:00,Hello] John: undefined

function say(time, phrase) {
  // console.log(arguments); // {0: "10:00", 1: "Hello"}
  // console.log(arguments[0]); // 10:00
  // console.log(arguments[1]); // Hello
  console.log(`[${time}] ${this.name}: ${phrase}`);
}

let user = { name: "John" };

let messageData = ['10:00', 'Hello'];

say.call(user, ...messageData); // [10:00] John: Hello (this=user)
say.apply(user, messageData); // [10:00] John: Hello (this=user) 똑같은 효과

// 2

// let args = [1, 2, 3];   // Array

// func.call(context, ...args); // pass an array as list with spread operator
// func.apply(context, args);   // is same as using apply

// 3
function myArgs(...rest) {
  console.log(arguments); 
}

myArgs(1);  // {0: 1}
myArgs(1, 2, 3); // {0: 1, 1: 2, 2: 3}

// apply는 array 뿐 아니라, object도 destructuring할 수 있다. 
// 4
let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function(...rest) {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }
    // let result = func.call(this, ...rest); // ok
    // let result = func.apply(this, rest); // ok
    let result = func.apply(this, arguments); // ok  // apply는 array 뿐 아니라 object도 destructuring(필요한 값만 뽑아서 변수에 할당하는 것) 할 수있는 call이라고 보면 된다.

    // console.log(...rest); // 3, 5
    // console.log(arguments); // {0: 3, 1: 5}

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works // Called with 3, 5 ,   8 
console.log( "Again " + worker.slow(3, 5) ); // same (cached)  // Again 8  

//*/


/* 105. Function binding == bind 묶다
// function의 this를 특정한 object로 묶어놓는 것.

//1
let user = {
  firstName: "Superman",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
user.sayHi();  // Hello, Superman!
setTimeout(user.sayHi); // setTimeout 주어가 Window. ==> Window.name // Hello, undefined!
setTimeout(user.sayHi, 1000); // 주어가 Window. ==> Window.name  // Hello, undefined!
user.sayHi();  // Hello, Superman!

//2
let user = {
  firstName: "Superman",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
// // 인위적으로 sayHi()의 주어를 user로 설정하는 방법
setTimeout(() => user.sayHi(), 500); // Hello, Superman!
setTimeout(user.sayHi, 1000); // Hello, undefined! 

// // ...within 1 second
user = {
  firstName: `Batman`,
  sayHi() {
    console.log("Another user in setTimeout!");
  }
};



// 3
let user = {
  firstName: "Superman"
};

function func() {
  console.log(this.firstName);
}

// // 38번째 에피소드: 어울림

let funcUser = func.bind(user);
console.log(funcUser);   // f bound func()

user = { 
  firstName: `Batman`,
}
console.log(user.firstName); // Batman
funcUser(); // ? Superman or Batman  => Superman

// 4
let user = {
  firstName: "Superman",  // property
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
// bind function and object, not function and a property of an object
let sayHi = user.sayHi.bind(user); // (*)

sayHi(); // Hello, Superman!

user.firstName = `Batman`;
sayHi(); // Hello, Batman!

user = {
  firstName: `Catwoman`,
  sayHi() {}
}

setTimeout(sayHi, 1000); // Hello, Batman!

//5
let user = {
  firstName: "Superman",
  say(phrase) {
    console.log(`${phrase}, ${this.firstName}!`);
  }
};

let say = user.say.bind(user);

say("Hello"); // Hello, Superman!
user.firstName = `Batman`;
user.say = (phrase) => console.log(42);
say("Bye"); // Bye, Batman!
*/