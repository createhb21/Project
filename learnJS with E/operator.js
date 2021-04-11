// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 1. String concatenation(연쇄)  --> + 기호를 이용해서 문자열과 문자열을 합해서 새로운 문자열을 만들 수 있음. 
console.log('my' + ' cat');
console.log('1' + 2); // 숫자가 문자열로 변환되어서 합해짐. // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);   // string literals: 1 + 2 = 3
console.log('ellie\'s book');  // ellie's book
console.log('ellie\'s \nbook');  // ellie's 
                                 // book
console.log('ellie\'s \n\tbook');  // ellie's 
                                  //    book

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement: 3, counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // postDecrement: 3, counter: 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than   // false
console.log(10 <= 6); // less than or equal  // false
console.log(10 > 6); // greater than  // true
console.log(10 >= 6); // greater than or equal  // true

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);  // or: true

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // and: false

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
    nullableObject.something; 
}   // null check  ->  nullableObject가 null이 아닐때만 이 object의 something이라는 value를 받아오게된다.

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);  // false  ==> value1 = true; , !value1 == false

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
// console.log(stringFive === numberFive);  // false
// console.log(stringFive !== numberFive);  // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false     ==> 각기 다른 reference
console.log(ellie1 === ellie2); // false     ==> 둘이 똑같은 type이든 아니든 reference 값이 다름.
console.log(ellie1 === ellie3); // true      ==> 같은 reference value를 ellie3으로 할당했기 때문에, 1과 3은 똑같은 reference를 가지고 있음.

// equality - puzzler
console.log(0 == false);  // true
console.log(0 === false); // false 0은 boolean type이 아니기 때문.
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested(중첩) loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}  // i가 0일때 j를 0~9까지 빙빙 돌리고, 또 i가 1일때 j를 0~9까지 빙빙 돌리고 ... 이런식으로 계속되다가 i >= 10 일때 break;
// but, 이렇게 작성하는 것은 CPU에 notGood.. 되도록이면 이렇게 작성 x

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}   // 1, 3, 5, 7, 9

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1. ${i}`);
  }
}  // 0, 2, 4, 6, 8, 10

// Q2. iterate(반복하다) from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}  // 0, 1, 2, 3, 4, 5, 6, 7, 8