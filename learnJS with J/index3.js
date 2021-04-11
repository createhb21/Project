/* 39. Constructor operator - new   ==> 여러 개 만들 떄 엄청나게 편리.
function Hero(name, age = 30) {
  this.name = name;
  this.age = age;
  this.skill = function() {
    return `I always win`
  }
}

// new  ==> new를 써서 Object를 만들 수 있음. superman, wolverine은 주어가 되어서 뒤에 동사를 호출할 수 있는 것. 기억해야할 약속 -> first letter을 대문자로...
let superman = new Hero(`Superman`, 25); 
let wolverine = new Hero(`Wolverine`);
let antman = new Hero(`antman`, 30);
let xman = new Hero(`xman`, 40);
let drStrange = new Hero(`Dr. Strange`, 50);

console.log(superman.age);
console.log(wolverine.age);
console.log(wolverine.skill());

// Object literal   ==> 하나만 만들 떄 
let birdman = {
  name: `Birdman`,
  age: 55,
  address: `Seoguipo Jungmun`,
  skill: function() {
    return `I can fly`;
  }
}

console.log(birdman.name);
console.log(birdman.age);
console.log(birdman.skill());
*/

/* 40. Array Destructing 기초 
// Destructing == de(줄인다, 분해, 해체한다) + structure(구조) + ing(명사)   -> 구조를 분해하는 것.

let heroes = [`Superman`, `Xman`];

// let hero1, hero2 = 1, heroes;     // = 기호를 두고 가장 가까운 것들끼리만 매칭이 된다.

// console.log(hero1);  // undefined
// console.log(hero2);  // 1

let [hero1, hero2] = heroes; // array destructuring

console.log(hero1);  // Superman
console.log(hero2);  // Xman
// */

/* 41. Array Destructing 응용

let heroes = [`Superman`, `Xman`];

let hero1 = heroes[0];
let hero2 = heroes[1];
console.log(hero1);    // Superman
console.log(hero2);   // Xman

let hero1 = heroes[0],
    hero2 = heroes[1];
console.log(hero1);    // Superman
console.log(hero2);    // Xman

let [hero1] = heroes;
console.log(hero1);    // Superman

let [ ,hero2] = heroes;   // 첫번째 element는 건너뛰고 두번째 element에 넣겠다. 하지만 이런 게 가능하다는 거지, 굳이 사용할 필요는 x. let hero1 = heroes[0] 이 훨씬 편함.
console.log(hero2);    // Xman


// string == array of characters(문자들의 배열)
let [a, b, c] = "abc"; // "abc"와 [a, b, c]는 같다는 것.
console.log(a);   // a
console.log(b);    // b
console.log(c);   // c

let [a, b, c] = [`a`, `b`, `c`]; // [`a`, `b`, `c`] ==  "abc" == `abc` == 'abc' 이걸 기억해!!!!!!!
console.log(a);   // a
console.log(b);   // b
console.log(c);   // c
/*/


/* 42. rest(...) operator
let heroes = [`Superman`, `Xman`, `Birdman`, `Catgirl`, `Wondergirl`];

let [hero1, hero2, ...otherHeroes] = heroes;

console.log(hero1);
console.log(hero2);
console.log(otherHeroes);
console.log(otherHeroes[0]);
console.log(otherHeroes[2]);

let [hero1, hero2, ...rest] = heroes;

console.log(hero1);
console.log(hero2);
console.log(rest);
console.log(rest[0]);
console.log(rest[2]);

let [hero1, hero2, hero3, hero4, hero5, hero6 = `Jupeter`] = heroes;  // default value

console.log(hero6);
console.log(hero2);

let [hero1, hero2, hero3, hero4, hero5, hero6 = prompt(`What is the name of a new hero?`)] = heroes;  // default value

console.log(hero6);
/*/


/* 43. Object Destructing
let superman = {
  name1: `Superman`,
  job: `Hero`,
  houlyPayment: 20,
  address: `Gangnam Samsung Remian`,
}

let {name1, job, address} = superman;

console.log(name1); // Superman
console.log(job);  // Hero
console.log(address);  // Gangnam Samsung Remian

//the name of variables in array destruturing is not important. // 순서가 중요, 이름은 not important.
let arr = [1, 2, 3, 4];
let [a, c, b] = arr;  
console.log(a);  // 1
console.log(b);  // 3
console.log(c);  // 2

let {name1, job, address} = superman;

console.log(name1);
console.log(job);
console.log(address);

//in the case of object destructuring, the name of variables are very important.
let {name1, address, job} = superman;

console.log(name1);
console.log(job);
console.log(address);

let {name1, job, address, tel = `01012277777`} = superman;

console.log(name1);
console.log(job);
console.log(address);
console.log(tel);

let {name1: n, job: j, address: a, tel = prompt(`What is your(superman) tel number`)} = superman;

console.log(n);
console.log(j);
console.log(a);
console.log(tel);
//*/

/* 44. JSON 기초
// JSON == language among various progrms written in various languages.
//영어 공통언어 <==> C(일본), Java(중국), Python(한국), Javascript(러시아) ....
// JSON == Javascript Object Notation = 프로그래밍 언어 사이의 영어(공통언어) 역할

// Converting a JSON text to a Javascript Object
// single quote vs. back tick
let text = `{ "employees" : [
{ "firstName":"John" , "lastName":"Doe" },
{ "firstName":"Anna" , "lastName":"Smith" },
{ "firstName":"Peter" , "lastName":"Jones" }
  ]
}`;   // 그저 text임. (stirng)

// console.log(text); // 그냥 text가 나옴.

// JSON object, parse() method
let obj = JSON.parse(text);  // JSON Text를 Javascript의 Object로 만들어낸다.
// console.log(obj)   // {employees: Array[3]} 정확하게 javascript의 object가 나옴.
// employess 라는 key를 가지고 있고, value로는 Array를 3개 가지고 있음. 
// 0: Object
// 1: Object
// 2: Object     // 첫번째도 Object, 두번째도 Object, 세번째도 Object.

console.log(obj); // {employees: Array[3]} => Javascript의 Object가 들어가있음.
console.log(obj.employees);  // [Object, Object, Object] 
console.log(obj.employees[0]);  //  {firstName: 'John', lastName: 'Doe'}
console.log(obj.employees[0].firstName);  // John
*/

/* 45. Send, Receive, and Store data using JSON
let text = `{ "employees" : [
  { "firstName":"John" , "lastName":"Doe" },
  { "firstName":"Anna" , "lastName":"Smith" },
  { "firstName":"Peter" , "lastName":"Jones" }
    ]
  }`;

  let obj = JSON.parse(text);

  document.getElementById("app").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;  // Anna Smith => 이런 식으로 웹페이지에 JSON Data를 표시할 수 있다.

  let myObj = {name: "John", age: 31, city: "New York"};
  let myJSON = JSON.stringify(myObj); // Javascript Object(Data)를 다른 프로그램으로 JSON을 이용해 보내는 방법.
  console.log(myJSON);  // {"name":"John","age":31,"city":"New York"} 는 JSON Data. 차이점은 key 앞, 뒤에 double quote가 있다는 것.

  // Receiving Data 
  myJSON = '{"name":"John","age":31,"city":"New York"}';
  myObj = JSON.parse(myJSON);
  document.getElementById("app").innerHTML = myObj.name;  // John 
  // JSON Data를 Javascript Object로 바꿔줘서 그걸 가지고 HTML 문서의 app이라고 하는 div에다가 담은 것.

  Storing data:
  let myObj ={"name":"John","age":31,"city":"New York"};
  let myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);

  // Retrieving data:
  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  document.getElementById("app").innerHTML = obj.name; // John
  */

  /* 46. Rest and Spread operator
  let abc = [`a`, `b`, `c`];
  let def = [`d`, `e`, `f`];

  let alpha = [abc, def];
  console.log(alpha); // [Array[3], Array[3]] == [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
  console.log(alpha[0][0]);   // a    -> Array 속에 Array 를 호출할 떄는, 한 번 index를 적어주고 그 뒤에 다시 index를 적어주는 방식으로 한다.
  console.log(alpha[0][1]);  // b
  console.log(alpha[1][1]);  // e

  // [`a`, `b`, `c`, `d`, `e`, `f`] 이렇게 할 수 있는 방법은..?
  Spread == 하나를 여럿으로 전환
  let beta = [...abc, ...def];
  console.log(beta);   // [ 'a', 'b', 'c', 'd', 'e', 'f' ]  이렇게..!!

  // Rest == 여럿을 하나로 전환
  function sum(first, ...rest) {
    console.log(...rest);  // 1     // 앞의 ... 은 하나의 array를 다시 풀어주는 것
    console.log(rest);  // [ 2, 3, 4, 5 ]     // rest는 여러개의 argumnet를 하나의 arrat로 만들어줌 
    for (let i = 0; i < rest.length; i++) {
      first += rest[i];
    }
    return first;
  }

  console.log(sum(1, 2, 3));       // 6   // ...others == 2, 3
  console.log(sum(1, 2, 3, 4, 5));         // 15  // ...others == 2, 3, 4, 5
  console.log(sum(1, 2, 3, 4, 5, 6, 7));       // 28   // ...others == 2, 3, 4, 5, 6, 7
// fuction의 argumnet의 숫자가 불특정한 상태에서 어떤 특정한 것을 제외한 나머지 몽땅 다를 지칭할 때 others라는 것을 쓴다. 물런 others가 아닌 어느 다른 단어를 써도 상관없다. 

//Rest / Collector / Gather 
let [c, ...m] = [1, 2, 3, 4, 5];
console.log(c);   // 1
console.log(m);  // [ 2, 3, 4, 5 ]

// Javascript <== Haskell <== Lisp 

let params = [`Superman`, 1, true];
let otherParams = [`birdman`, ...params];
let otherParams2 = [`birdman`, params];
console.log(otherParams);       // [ 'birdman', 'Superman', 1, true ]
console.log(otherParams2);       //  [ 'birdman', Array[3]] ==  [ 'birdman', [ 'Superman', 1, true ] ]
*/


/* 47. Closure
// 1
// let heroName = "Superman";

// // Function Declaration
// function sayHi() {
//   console.log("Hi, " + heroName);
// }

// heroName = "Batman";

// sayHi(); // Superman or Batman? // Hi, Batman

// 2
// Lexical Scope
// function heroName() {
//   let name2 = "Superman";

//   return function() { 
//     // 여기서 name2를 찾아본다. 
//     console.log(`Hi, I am ${name2}`);
//   }; 
// }

// let name2 = "Batman";

// let result = heroName(); // f()

// console.log(result); // f()
// console.log(result()); //  Hi, I am Superman  => heroName을 실행한 결과를 다시 실행하라는 말.
// console.log(heroName()()); //  Hi, I am Superman // 실행한 결과가 나옴.


// 3 Scope
// function heroName(firstName, lastName) {
//   // helper nested function to use below
//   function getFullName() {
//     // let firstName = `Park`;
//     let lastName = 'Batman';
//     return firstName + " " + lastName;
//   }

//   console.log( "Hello, " + getFullName() );
//   console.log( "Bye, " + getFullName() );

// }

// heroName(`Kim`, `Superman`);

// 4  Independent Scope
// function makeCounter() {
//   let count = 0;

//   return function() {
//     // let count = 1;
//     return count++; // has access to the outer counter
//   };
// }

// // let counter1 = makeCounter();

// // console.log( counter1() ); // 0, count => 1 
// // console.log( counter1() ); // 1, count => 2
// // console.log( counter1() ); // 2, count => 3

// // let counter2 = makeCounter();
// // console.log( counter2() ); // 3? or 0?    -> 0 
// // console.log( counter2() ); //  1
// // console.log( counter2() ); //  2

// console.log( makeCounter()() ); // 0
// console.log( makeCounter()() ); // 0
// console.log( makeCounter()() ); // 0
// console.log( makeCounter()() ); // 0
// console.log( makeCounter()() ); // 0

// QUIZ: reset the counter from the code that doesn’t belong to makeCounter.

// QUIZ: If we call makeCounter() multiple times, do they share the same count?

// 5 
// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// console.log( counter1() ); 
// console.log( counter1() ); 

// console.log( counter2() ); 

// 6
// [[Environment]]
*/

/* 50. Scheduling: setTimeout and setInterval
setTimeout == 일정한 시간이 지난 뒤에 특정 function을 실행함.
// 1
function sayHi() {
  console.log('Hello');
}
sayHi();
setTimeout(sayHi, 2000); // 1/1000 second = 1 millisecond -> 2초뒤에 나타남.

//2
function sayHi(phrase, who) {
  console.log( phrase + ', ' + who );
}

sayHi("Hello", "John");
setTimeout(sayHi, 1000, "Hello", "John"); 


//3
setTimeout(() => console.log('Hello'));
setTimeout(() => console.log('Hello'), 1000);
setTimeout(() => console.log('Hello'), 2000);

//4
let timerId = setTimeout(() => console.log("never happens"), 1000); // setTimeout returns timer ID.

// left = right; JS engine read right, evaluate it, return the result of evaluation, assign the result on left.  
let a = 1; // 1 == expression
console.log(a);

let b = 1 + 1;
console.log(b);

console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId);


//5

// repeat with the interval of 2 seconds
let timerId = setInterval(() => console.log('tick'), 1000); // side effects

// after 5 seconds stop
setTimeout(() => { 
  clearInterval(timerId); 
  console.log('stop'); 
  }, 5000);

//*/



/* 51. Decorators 
//1
// Functional programming
function slow(x) {  // identity function
  // there can be a heavy CPU-intensive job here
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
    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

let slowFn = cachingDecorator(slow);

console.log( slowFn(1) ); // slowFn(1) is cached
console.log( "Again: " + slowFn(1) ); // the same

console.log( slowFn(2) ); // slowFn(2) is cached
console.log( "Again: " + slowFn(2) ); // the same as the previous line


//2
// we'll make worker.slow caching
// let worker = {
//   someMethod() {
//     return 3;
//   },

//   slow(x) {
//     // actually, there can be a scary CPU-heavy task here
//     console.log("Called with " + x);
//     // return x * worker.someMethod(); // (*)
//     return x * this.someMethod(); // (*)
//     // return x * 5; // OK
//   }
// };

// // same code as before
// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }


//     let result = func(x); // (**)
//     cache.set(x, result);
//     return result;
//   }; 
// }

// console.log(worker.slow(1)); // the original method works

// worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow(2)); // Whoops! Error: Cannot read property 'someMethod' of undefined
// console.log(worker.slow(2)); 
//*/


//* Methods 
// field or property == key + value
let student1 = {
  name: "superman", // primitive types: string, number, boolean, symbol, null, undefined
  study: {
    field: "Javascript",
    year: 3
  },  // Object

  // Method
  action: function(num) {
    return num + 3;
  }  // function object 
}

console.log(student1.action(5));  // 8

// Function Expression
let myFn = function(num) {
  return num + 3;
} // function object

// Function Declaration
function myFn2(num) {
  return num + 3;
}  // function object

let JU = "jupeter".toUpperCase();  // primitive type(중 "jupeter"은 string)도 method를 가진다는 거.
console.log(JU);  // JUPETER
let num = 1.23455566.toFixed(2);  // number도 method를 가진다는 것..
console.log(num);  // 1.23
