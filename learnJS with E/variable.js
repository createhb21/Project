// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6) 
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name); // ellie
  name = 'hello';
  console.log(name);  // hello
  console.log(globalName);  // global name
}
console.log(name);   // name is not defined
console.log(globalName); // global name

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// hoisting ==> 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다.
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);   // age  => var의 문제점.

// 3. Constant, r(read only)
// use const whenever possible.  // 가능하면 항상 const를 사용합니다.
// only use let if variable needs to change. // 변수를 변경해야하는 경우에만 let을 사용하십시오.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable(불변) data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable(변하기 쉬운) data types: all objects by default are mutable in JS 기본적으로 모든 Onject는 JS에서 변경(Modify) 가능.
// favor immutable data type always for a few reasons:
//  - security   
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol (6가지)
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;   // Infinity
const negativeInfinity = -1 / 0;  // -Infinity
const nAn = 'not a number' / 2;   // NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)   => 숫자 뒤에 n 붙이면 bigInt. 
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53) // 범위
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);    // type이 bigInt로 출력된다

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);   // value: hello brendan, type: string
const helloBob = `hi ${brendan}!`; //template literals (string) ->와 이거 개편하다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);  // value: hi brendan!, type: string
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // value: helloBob type: string

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);  // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`);  // value: false, type: boolean

// null
let nothing = null;  // 아직 할당 안하고 있어! 라는 비슷한 뜻
console.log(`value: ${nothing}, type: ${typeof nothing}`);  // value: null, type: object

// undefined
let x;   // 할당은 아직 안하고 선언만 해논 변수.
console.log(`value: ${x}, type: ${typeof x}`);  // value: undefined, type: undefined

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false   -> 동일한 string을 작성했어도 다른 symbol로 만들어지기떄문에, 주어지는 string에 상관없이 고유한 식별자를 만들 때 사용되어진다. 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');   // string이 똑같고 동일한 symbol을 만들고 싶다면 Symbol.for('id') 이렇게 사용하면, 주어진 string에 맞는 symbol을 만들어줘~ 이래서 둘이 똑같다고 나옴. 
console.log(gSymbol1 === gSymbol2); // true 
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // 항상 .description을 이용해서 string으로 변환해서 출력을 해야 한다.

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;
console.log(ellie.age);   // 21

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);  // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);  // value: 4, type: number
console.log(text.charAt(0)); // Uncaught TypeError: text.charAt is not a function at <anonymous>:2:18

// JavaScript는 runtime에서(프로그램이 동작할 때) 할당된 값에 따라서 type이 정해진다(변경될 수 있다는)는 것....!