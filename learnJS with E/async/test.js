/* function 

function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

doSomething(add);  // 5 
const addFun = add;
console.log(addFun); // [Function: add]
addFun(1, 2);  // 3 


function add(num1, num2) {
  return num1 + num2;
}

function devide(num1, num2) {
  return num1 / num2;
} 

function surprise(operator) {
  const result = operator(2, 3);
  console.log(result);
}

surprise(devide);
*/


/* primitive 타입과 object의 차이점
// number, string, boolean, null, undefined    ==> 가장 작은 단위의 data type.
// let age = 2;
// let num = '2';

let number = 2;
let number2 = number;
console.log(number);  // 2
console.log(number2); // 2

number2 = 3;
console.log(number);  // 2
console.log(number2); // 3
*/



/* Object 
let obj = {
  name: 'ellie',
  age: 5,
};
console.log(obj.name); // ellie

let obj2 = obj;
console.log(obj2.name); // ellie

obj.name = 'james';
console.log(obj2.name); // james
// console.log(obj.name); // james

const obj = {
  name: 'ellie',
  age: 5,
};
obj.name = 'james';
*/


/* function2 
function add(num1, num2) {
  return num1 + num2;
}

function print(a, b) {
  console.log(`${a} ${b}`);
}

print(12, 33); // 12 33

const doSomething = add;

const result = doSomething(2, 3);
console.log(result);   // 5
const result2 = add(2, 3);
console.log(result2);  // 5

function print() {
  console.log('print');
}

print();   // print
print(6);   // print
print(12, 33);   // print


function add(num1, num2) {
  return num1 + num2;
}

function surprise(operator) {
  const result = operator();
  console.log(result);
}

surprise(); // operator not a function
surprise(add); //   NaN

function add(num1, num2) {
  return num1 + num2;
}

function devide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  const result = operator(2, 3);    // add(2, 3)  // devide(2, 3)
  console.log(result);
}

surprise(add); //  5
surprise(devide); // 0.666666666
*/



/* 연산자 | boolean의 모든것 && 연산자
false: 0, -0, '', null, undefined, NaN
true: -1, 'hello', [], 'false'
let num; // undefined
if (false) {
  console.log('true!');
} else {
  console.log('false!'); 
}   // false!


let num = 9; 
if (num) {
  console.log('true!');
}  // true!
num && console.log(num); // 9 

let obj = {
  name: 'ellie',
}; 
if (obj) {
  console.log(obj.name);    // ellie
} 

obj && console.log(obj.name); // ellie 
*/


/* 클래스 | 클래스 예제와 콜백 함수 최종 정리
class Counter {
  constructor() {
      this.counter = 0;
  }

  increase() {
      this.counter++;
      console.log(this.counter);
      if(this.counter % 5 === 0) {
        console.log('yo!');
      }
  }
}

const coolCounter = new Counter();
coolCounter.increase();   // 1 
coolCounter.increase();   // 2
coolCounter.increase();   // 3
coolCounter.increase();   // 4
coolCounter.increase();   // 5, yo!

class Counter {
  constructor() {
      this.counter = 0;
  }

  increase(runIf5Times) {
      this.counter++;
      console.log(this.counter);
      if(this.counter % 5 === 0) {
        runIf5Times();
      }
  }
}

const coolCounter = new Counter();
function printSomething() {
  console.log('yo!');
}
coolCounter.increase(printSomething);   // 1 
coolCounter.increase(printSomething);   // 2
coolCounter.increase(printSomething);   // 3
coolCounter.increase(printSomething);   // 4
coolCounter.increase(printSomething);   // 5, yo!

class Counter {
  constructor() {
      this.counter = 0;
  }

  increase(runIf5Times) {
      this.counter++;
      console.log(this.counter);
      if(this.counter % 5 === 0) {
        runIf5Times(this.counter);
      }
  }
}

const coolCounter = new Counter();
function printSomething(num) {
  console.log(`yo! ${num}`);
}
function alertNum(num) {
  alert(`Wow! ${num}`);
}
coolCounter.increase(printSomething);   // 1 
coolCounter.increase(printSomething);   // 2
coolCounter.increase(printSomething);   // 3
coolCounter.increase(printSomething);   // 4
coolCounter.increase(printSomething);   // yo! 5

coolCounter.increase(printSomething);   // 6
coolCounter.increase(printSomething);   // 7
coolCounter.increase(printSomething);   // 8
coolCounter.increase(printSomething);   // 9
coolCounter.increase(alertNum);   // Wow! 10 (alert)

class Counter {
  constructor(runEveryFiveTimes) {
      this.counter = 0;
      this.callback = runEveryFiveTimes;
  }

  increase() {
      this.counter++;
      console.log(this.counter);
      if(this.counter % 5 === 0) {
        this.callback(this.counter);
      }
  }
}
function printSomething(num) {
  console.log(`yo! ${num}`);
}
function alertNum(num) {
  alert(`Wow! ${num}`);
}

const coolCounter = new Counter(printSomething);

coolCounter.increase();   // 1
coolCounter.increase();   // 2
coolCounter.increase();   // 3
coolCounter.increase();   // 4
coolCounter.increase();   // yo! 5
coolCounter.increase();   // 6
coolCounter.increase();   // 7
coolCounter.increase();   // 8
coolCounter.increase();   // 9
coolCounter.increase();   // yo! 10


class Counter {
  constructor(runEveryFiveTimes) {
      this.counter = 0;
      this.callback = runEveryFiveTimes;
  }

  increase() {
      this.counter++;
      console.log(this.counter);
      if(this.counter % 5 === 0) {
        this.callback && this.callback(this.counter);
      }
  }
}

function printSomething(num) {
  console.log(`yo! ${num}`);
}

function alertNum(num) {
  alert(`Wow! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);
*/


/* class refactoring
function 기계(구멍1, 구멍2) {
  this.q = 구멍1;
  this.w = 구멍2;
}

const nunu = new 기계('consume', 'snowball')
const garen = new 기계('strike', 'courage')

console.log(nunu);   // 기계 { q: 'consume', w: 'snowball' }
console.log(garen);  // 기계 { q: 'strike', w: 'courage' }



class Hero {
  constructor(구멍1, 구멍2) {
    this.q = 구멍1;
    this.w = 구멍2;
  }
}

const nunu = new Hero('consume', 'snowball')
const garen = new Hero('strike', 'courage')

console.log(nunu);  // Hero { q: 'consume', w: 'snowball' }
console.log(garen);  // Hero { q: 'strike', w: 'courage' }

class Person {
  constructor(name, age) {
    this.name = name;   
    this.age = age;   
  }

  speak() {  
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
// ellie = { 
//   name: "ellie",
//   age: 20,
// };   //  ?

console.log(ellie.name);  // ellie
console.log(ellie.age);  // 20
ellie.speak();  // ellie: hello!
*/