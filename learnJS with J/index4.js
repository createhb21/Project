/* 71. Array 기초
// Object
let obj1 = new Object(); // constructor
let obj2 = {
  key: "value",
} // literal

// Array
let arr1 = new Array(); // constructor
let arr2 = []; //literal

console.log(obj1); // {} // curly bracket
console.log(arr1); // [] // angled bracket
console.log(obj2); // {} // curly bracket
console.log(arr2); // [] // angled bracket
let heroName = `Jupeter`; // immutable
// let heroes = [0: `superman`, 1: `batman`, 2: `x-man`];
let heroes = [`superman`, `batman`, `x-man`]; // mutable

console.log(obj2["key"]); // value
console.log(heroes[0]);  // superman
console.log(heroes[1]);  // batman
console.log(heroes[2]); // x-man
console.log(heroName.length); // 7
console.log(heroes.length); // 3  ==> Array는 길이를 측정할 수 있도록 만들어진 대상이다. Array == List
console.log(obj2.length); // undefined ==> object는 길이를 측정할 수 있게 만들어진 대상이 아니다.

heroName[0] = 'K';   // error -> immutable
heroes[0] = 'birdman';
console.log(heroes);  // ["birdman", "batman", "x-man"]  --> mutable
console.log(heroName[0]);  // J

console.log(heroes);  // [ 'superman', 'batman', 'x-man' ]
let popedHero = heroes.pop(); // 오른쪽 끝의 element를 빼는 것.
console.log(heroes);   // [ 'superman', 'batman' ]
console.log(popedHero);  // x-man
*/


/* 72. Array pop push shift unshift
let heroName = `Jupeter`;
let heroes = [`superman`, `batman`, `x-man`];

// console.log(heroes);  // [ 'superman', 'batman', 'x-man' ]
// let popedHero = heroes.pop(); // 오른쪽 끝의 element를 빼는 것.
// console.log(heroes);   // [ 'superman', 'batman' ]
// console.log(popedHero); // x-man

heroes.push('aquaman');  // 오른쪽 끝에 element를 추가하는 것.
console.log(heroes); // [ 'superman', 'batman', 'x-man', 'aquaman' ]

let shiftedHero = heroes.shift();  // 인쪽 끝에 element를 빼는 것
console.log(heroes); // [ 'batman', 'x-man', 'aquaman' ]
console.log(shiftedHero);  // superman

heroes.unshift('ironman');
console.log(heroes);  // [ 'ironman', 'batman', 'x-man', 'aquaman' ]
*/

/* 73. Loop  뺑글뺑글 도는 것
let heroes = [`superman`, `batman`, `x-man`];
// Array 
let myName = 'Jupeter'; // String
let myObj = {
  name: 'Jupeter',
  age: 65,
  address: 'my home'
}  // Object

// console.log(heroes.length);  // array   3
// console.log(myName.length);  // string    7
// console.log(myObj.legnth);  // Object는 length를 적용할 수 없다.  
// length가 있다는 것은 element간에 순서(서열, 순위= index)가 있다는 것인데, Object는 element 간에 순서가 없다. 그냥 다 똑같은, 평등한 property라는 것임.  

for (let key in myObj) {
  console.log(key);
}   // name, age, address 

for (let key in myObj) {
  console.log(myObj[key]);
} // Jupeter, 65, my home

// x
// dot(.) notation(표기법) 이건 안되는데 브라켓으로 하는건 되는데, why?
for (let key in myObj) {
  console.log(myObj.key);
} // 왜 myObj.key는 안되고 myObj[key]는 될까?

// x   of로 못씀임
// for (let prop of myObj) {
//   console.log(prop);
// }

for (let char of myName) {
  console.log(char);
}  // J u p e t e r


for (let key in heroes) {
  console.log(key);
} // Array도 Object란 말이에요, Array에도 눈에 보이지않는 key가 존재, 0, 1, 2
for (let key in heroes) {
  console.log(heroes[key]);
}   // superman, batman, x-man

for (let key of heroes) {
  console.log(key);
}  // superman, batman, x-man
*/


/* 75 - Array Method - slice( )
// Slice 조각
// Slice <==> Splice 동작하는 방식이 다름.
// splice: remove an item by index position
// slice == 배열에서 원하는 부분만 return해서 받아오는 아이
// slice는 기존에 있는 Array를 변화시키는 것이 아니라, 기존의 있는 Array에서 특정한 element만 내가 뽑아내고 싶다 할 떄 쓰는 것임.

let heroes = ['superman', 'batman', 'x-man'];
console.log(heroes); // [ 'superman', 'batman', 'x-man' ]

let cut = heroes.slice(1, 2); // ['superman, 'x-man]
console.log(heroes); // ['superman', 'batman', 'x-man']
console.log(cut); // [ 'batman' ]

let a = heroes.slice(1, 2);
console.log(heroes);  // ['superman', 'batman', 'x-man']
console.log(a); // [ 'batman' ]

let b = heroes.slice(0, 2);
console.log(heroes); // ['superman', 'batman', 'x-man']
console.log(b); // [ 'superman', 'batman' ] 
*/

/* 76 - Array Method - concat( )
// concat이라고 하는 것은 기존에 있는 Array를 변화를 주는 것이 아니라 새로운 Array를 만들어 내는 것.

let heroes = [`superman`, `batman`, `x-man`];
let newHeroes = [`Dr. strange`, `Tor`, `Wolverine`];
// heroes.concat(newHeroes);
// console.log(heroes); // [ 'superman', 'batman', 'x-man' ]

// let newGroup = heroes.concat(newHeroes);
// console.log(newGroup); // [ 'superman', 'batman', 'x-man', 'Dr. strange', 'Tor', 'Wolverine' ]

// Splice === 기존의 Array를 변경
// Slice === 기존 Array를 그대로 두고, 일부 item(array의 원소를 item이라고 부름)를 뽑아낸다. 
// concat는 기존 Array를 그대로 두고, 새로운 Array를 만들어 낸다. 

let newGroup2 = heroes.concat(`birdman`);  // string을 concat
console.log(newGroup2);  // [ 'superman', 'batman', 'x-man', 'birdman' ]

let newGroup3 = heroes.concat([`birdman`]);  // array를 concat
console.log(newGroup3);  // [ 'superman', 'batman', 'x-man', 'birdman' ]
// 똑같은 결과가 나온다.
*/

/* 77 - Array Method - indexOf( )

let superman = {
  name: `Superman`,
  tel: `010-2345-6789`,
  pay: `$10/hr`
}

let batman = {
  name: `Batman`,
  tel: `010-3345-6789`,
  pay: `$12/hr`
}

let ironman = {
  name: `Ironman`,
  tel: `010-4345-6789`,
  pay: `$13/hr`
}

let birdman = {
  name: `Birdman`,
  tel: `010-8945-6789`,
  pay: `$15/hr`
}

// Object들 자체도 Array의 element가 될 수 있다.
let heroes = [
  superman,
  batman,
  ironman,
]
console.log(
  heroes.indexOf(superman)
);  // 0
console.log(
  heroes.indexOf(batman)
);  // 1
console.log(
  heroes.indexOf(ironman)
);  // 2
console.log(
  heroes.indexOf(birdman)
);  // -1
*/


/* 78 - Array Method - find( )
let superman = {
  name: `Superman`,
  tel: `010-2345-6789`,
  pay: `$10/hr`,
  address: `Busan`,
}

let batman = {
  name: `Batman`,
  tel: `010-3345-6789`,
  pay: `$12/hr`,
  address: `Gwangju`,
}

let ironman = {
  name: `Ironman`,
  tel: `010-4345-6789`,
  pay: `$13/hr`,
  address: `Seoul`,
}

let birdman = {
  name: `Birdman`,
  tel: `010-8945-6789`,
  pay: `$15/hr`,
  address: `Jejudo`,
}


let heroes = [
  superman,
  batman,
  ironman,
]
// console.log(
//   heroes.indexOf(superman)
// );  
// console.log(
//   heroes.indexOf(batman)
// );  
// console.log(
//   heroes.indexOf(ironman)
// );  
// console.log(
//   heroes.indexOf(birdman)
// );  

// let foundHero = heroes.find(item => item.address == `Busan`);
// // console.log(foundHero); // { name: 'Superman',
// //                           tel: '010-2345-6789',
// //                           pay: '$10/hr',
// //                           address: 'Busan'
// //                          }
// console.log(foundHero.name);  // Superman
// console.log(foundHero.pay);  // $10/hr


let foundHero = heroes.find(item => item.pay == `$13/hr`)
// console.log(foundHero);  // { name: 'Ironman',
//                               tel: '010-4345-6789',
//                                pay: '$13/hr',
//                                address: 'Seoul'
                          // }
console.log(foundHero.tel); // 010-4345-6789
*/


/* 79 - Array Method - filter( )
// filter == item들 중에서 특정 조건을 만족하는 item들만 골라내는 것.
let superman = {
  name: `Superman`,
  tel: `010-2345-6789`,
  hourlyPayment: 10,
  address: `Busan`,
}

let batman = {
  name: `Batman`,
  tel: `010-3345-6789`,
  hourlyPayment: 12,
  address: `Gwangju`,
}

let ironman = {
  name: `Ironman`,
  tel: `010-4345-6789`,
  hourlyPayment: 15,
  address: `Seoul`,
}

let birdman = {
  name: `Birdman`,
  tel: `010-8945-6789`,
  hourlyPayment: 17,
  address: `Jejudo`,
}

let heroes = [
  superman,
  batman,
  ironman,
  birdman,
]

let highIncomeHeroes = heroes.filter(item => item.hourlyPayment >= 14);
console.log(highIncomeHeroes); 
console.log(highIncomeHeroes.length);  // 2  
// [
//   {
//     name: 'Ironman',
//     tel: '010-4345-6789',
//     hourlyPayment: 15,
//     address: 'Seoul'
//   },
//   {
//     name: 'Birdman',
//     tel: '010-8945-6789',
//     hourlyPayment: 17,
//     address: 'Jejudo'
//   }
// ]

let firstHeroName = highIncomeHeroes[0].name;
let secondHeroName = highIncomeHeroes[1].name;
console.log(firstHeroName);   // Ironman
console.log(secondHeroName);  // Birdman
*/

/* 80 - Array Method - map( )
// map == Array에 있는 하나의 item을 다른 무언가로 바꿔줘서 return하는 것.
// [Object, Object] 가 있으면, Object를 item에 넣고, 그 Object의 name property, 즉 key가 name인 것의 값(value)을 return해준다.
// map은 서로 딱딱 하나의 짝을 맞춰주는 것. 
// (item => item.name) 라면 item과 item.name의 짝을 맞춰서 결과적으로 두개의 Object 각각에 대해서 Object.name의 값을 return..!
let superman = {
  name: `Superman`,
  tel: `010-2345-6789`,
  hourlyPayment: 10,
  address: `Busan`,
}

let batman = {
  name: `Batman`,
  tel: `010-3345-6789`,
  hourlyPayment: 12,
  address: `Gwangju`,
}

let ironman = {
  name: `Ironman`,
  tel: `010-4345-6789`,
  hourlyPayment: 15,
  address: `Seoul`,
}

let birdman = {
  name: `Birdman`,
  tel: `010-8945-6789`,
  hourlyPayment: 17,
  address: `Jejudo`,
}

let heroes = [
  superman,
  batman,
  ironman,
  birdman,
]

let highIncomeHeroes = heroes.filter(item => item.hourlyPayment >= 14);
console.log(highIncomeHeroes);

let names = highIncomeHeroes.map(item => item.name);
console.log(names);  // [ 'Ironman', 'Birdman' ]
*/


/* 81 - Array Method - sort( )
let superman = {
  name: `Superman`,
  tel: `010-2345-6789`,
  hourlyPayment: 18,
  address: `Busan`,
}

let batman = {
  name: `Batman`,
  tel: `010-3345-6789`,
  hourlyPayment: 16,
  address: `Gwangju`,
}

let ironman = {
  name: `Ironman`,
  tel: `010-4345-6789`,
  hourlyPayment: 15,
  address: `Seoul`,
}

let birdman = {
  name: `Birdman`,
  tel: `010-8945-6789`,
  hourlyPayment: 17,
  address: `Jejudo`,
}

let heroes = [
  superman,  // object
  batman,  // object
  ironman,  // object
  birdman,  // object
]
console.log(heroes); 
// [
//   {
//     name: 'Superman',
//     tel: '010-2345-6789',
//     hourlyPayment: 18,
//     address: 'Busan'
//   },
//   {
//     name: 'Batman',
//     tel: '010-3345-6789',
//     hourlyPayment: 16,
//     address: 'Gwangju'
//   },
//   {
//     name: 'Ironman',
//     tel: '010-4345-6789',
//     hourlyPayment: 15,
//     address: 'Seoul'
//   },
//   {
//     name: 'Birdman',
//     tel: '010-8945-6789',
//     hourlyPayment: 17,
//     address: 'Jejudo'
//   }
// ]

// 이 사람들의 시급이 10 ,12, 15, 17라고 되있는데, 슈퍼맨이 너무 요즘 일을 잘해서 시급을 18으로 올려줬어용~ 배트맨도 일을 잘해서 시급을 16으로 올려줬어.
// 그래서 18, 16, 15, 17 이렇게 시급이 측정되었어. 그럼 이거를 시급순으로 한 번 정렬을 해보자! 혹은 성적 순으로 전교생을 순서를 매겨서 정렬을 해보자! 이걸 하는 게 sort 이다.

let sortedHeroes = heroes.sort((a, b) => a.hourlyPayment - b.hourlyPayment); // 빼주면 그 값이 +가 되거나 -가 되거나 0이 되거나 이 셋 중에 하나임. 이 셋 중 하나인 것을 참고해서 컴퓨터가 알아서 이 녀석들간에 순서를 매기게 된다. 
console.log(sortedHeroes);
// [
//   {
//     name: 'Ironman',
//     tel: '010-4345-6789',
//     hourlyPayment: 15,
//     address: 'Seoul'
//   },
//   {
//     name: 'Batman',
//     tel: '010-3345-6789',
//     hourlyPayment: 16,
//     address: 'Gwangju'
//   },
//   {
//     name: 'Birdman',
//     tel: '010-8945-6789',
//     hourlyPayment: 17,
//     address: 'Jejudo'
//   },
//   {
//     name: 'Superman',
//     tel: '010-2345-6789',
//     hourlyPayment: 18,
//     address: 'Busan'
//   }
// ]
console.log(heroes); 
// [
//   {
//     name: 'Ironman',
//     tel: '010-4345-6789',
//     hourlyPayment: 15,
//     address: 'Seoul'
//   },
//   {
//     name: 'Batman',
//     tel: '010-3345-6789',
//     hourlyPayment: 16,
//     address: 'Gwangju'
//   },
//   {
//     name: 'Birdman',
//     tel: '010-8945-6789',
//     hourlyPayment: 17,
//     address: 'Jejudo'
//   },
//   {
//     name: 'Superman',
//     tel: '010-2345-6789',
//     hourlyPayment: 18,
//     address: 'Busan'
//   }
// ]
*/

/* 82 - Array Method - compare( )
let myList1 = [1, 2, 5, 3, 10, 8, 15, 23, 45];

let sorted1 = myList1.sort();
console.log(sorted1);  // [1, 10, 15, 2, 23, 3, 45, 5, 8] 
// 첫 글자가 1인것들이 먼저 나오고, 둘 다 첫 글자가 1인 경우에는 두번째 자리가 어떤게 더 큰지 봐서 두번째 글자가 나오고 그리고 2인 것들이 나오고 3인 것, 4인것 5, 8 순으로 나오네요.

let myList2 = [`Jupeter`, `Superman`, `Deadpool`, `Birdman`, `Wolverine`, `jupeter`];

let sorted2 = myList2.sort();
console.log(sorted2);  // [ 'Birdman', 'Deadpool', 'Jupeter', 'Superman', 'Wolverine', `jupeter` ]  
// 알파벳 순으로 정렬이 잘 되어있음, 그리고 소문자가 가장 커서 가장 뒤에 나옴. 기본적으로 소문자 > 대문자.

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let sorted3 = myList1.sort(compare);
console.log(sorted3);  // [1, 2,  3,  5, 8, 10, 15, 23, 45]
// 우리가 원했던 순서대로 정렬이 되었다.
*/

/* 83 - Array Method - reverse( ), split( ), join( )
let myList4 = [`Jupeter`, `Superman`, `Deadpool`, `Birdman`, `Wolverine`, `jupeter`];

// myList4.reverse();

// console.log(myList4); // ['jupeter','Wolverine','Birdman','Deadpool','Superman','Jupeter']

// let myList5 = [1, 2, 3, 4, 5];

// myList5.reverse();
// console.log(myList5);  // [ 5, 4, 3, 2, 1 ]
// myList4,    myList5 원본 자체가 통째로 바껴버려용~ => Transformation
// Transformation == trans(옮기다) + form(형태) + ation(동작) 
// 원래의 있던 것들(원본)이 바꾸어버린다.

// split and join
// split: string => array 
// join: array => string
// myList4.split(); // error. myList4는 이미 array자나.
let result = myList4.join();
console.log(result); // Jupeter,Superman,Deadpool,Birdman,Wolverine,jupeter  
// 변수를 지정해서 해야함. => expression
// 그냥 console.log(myList4); 하면 동작x why? join은 !transformation.
// myList4 원본은 그대로 두고, result만 새로운 결과를 만들어 냄. == array => string 변환됌. ok?

let anotherResult = result.split(',');
console.log(anotherResult); // [`Jupeter`, `Superman`, `Deadpool`, `Birdman`, `Wolverine`, `jupeter`]

// join과 split은 정확히 서로 반대되는 역할.
*/


/* 84 - Array Method - reduce( )
// map, reduce
// Reduce ==> map과 더불어서 가장 많이 사용되어질 것...!
let myList6 = [1, 2, 3, 4, 5];

let result = myList6.reduce((current, accumulator) => current + accumulator, 0)  // current == item 하나씩 하나씩 들어감, 0 == accumulator
console.log(result);  // 15 === 1 + 2 + 3 + 4 + 5

// let result = myList6.reduce((current, accumulator) => current * accumulator, 0)
// console.log(result);  // 0

// let result = myList6.reduce((current, accumulator) => current / accumulator, 0)
// console.log(result);  // 0
*/


/* 85 - Array Method - forEach( )
//forEach
let  myList6 = [1, 2, 3, 4, 5];

myList6.forEach(item => console.log(item * 5)); // 5, 10, 15, 20, 25
let result = myList6.forEach(item => item * 5); 
console.log(result); // undefined
// 따라서 forEach는 값을 return하는 게 아니라는 것. 지금까지 우리가 공부한 method들은 무언가를 return값이 있었지만, forEach는 return값이 없음. 그냥 그대로 function을 실행할 뿐입니다, 실행한 다음에 실행된 결과를 돌려보내지 않음.

let result = myList6.forEach(item => {return item * 5}); 
console.log(result); // 강제로 return을 넣어도 역시 undefined가 나온다.
// forEach는 하나의 function을 각각의 item에 적용을 하지만, 그 결과값을 다시 forEach 변수로 돌려주지 않는다는 것. 이게 forEach의 특별한 성격
*/


/* 86- Object methods - keys( ), values( ), entries( ) // 특별한 methods
const superman = {
  name: `Superman`,
  age: 25,
  address: `Seoguipo Jungmun`,
  hourlyPaymentInUSD: 17,
}

let a = Object.keys(superman);
console.log(a);   // [ 'name', 'age', 'address', 'hourlyPaymentInUSD' ] // Object의 key들
let b = Object.values(superman);
console.log(b);  // [ 'Superman', 25, 'Seoguipo Jungmun', 17 ] //         Object의 vlaue들
let c = Object.entries(superman);
console.log(c);  // [
//                   [ 'name', 'Superman' ],
//                   [ 'age', 25 ],
//                   [ 'address', 'Seoguipo Jungmun' ],
//                   [ 'hourlyPaymentInUSD', 17 ]
//                  ]
for ( let kry of Object.keys(superman)) {
  console.log(k)   //
}

for (const key of Object.values(superman)) {
  console.log(k)   // 
}

// object가 만들어지고 난 후에 구현 가능한 methods.. 
// 그래서 컴퓨터가 처리하는 속도가 빠르지 x
// 그래서 잘 사용 x 대신 map 을 사용!!!
*/


/* 87 - Map 기초
// Map, Set, WeakMap, and WeakSet
// const car = {}
// car['color'] = 'red'
// car['owner'] = 'Flavio'
// console.log(car['color']);  // red
// console.log(car['owner']);  // Flavio
// console.log(car); // { color: 'red', owner: 'Flavio' }


const m = new Map();
m.set(`color`, `red`); // [[`color`, `red`]]
m.set(`age`, 2);  // [[`color, `red`], [`age`, 2]]
console.log(m); // Map(2) { 'color' => 'red', 'age' => 2 } == [Array[2], Array[2]]

// map이라는 것은 Object에 비슷한데, Array에 훨씬 더 가깝다는 것...  사실상 Array 형태란 말이에요..? 


// Map.get(array[0])
console.log(m.get(`color`));  // red  // array[1]
console.log(m.get(`age`));   // 2

// Object에 비해서 Map의 경우는 서로 쌍으로 되있는 data... (key와 value 같은) 형태의 많은 데이타를 처리하는데 있어서 굉장히 효과적임. 
*/


//* 88 Map for loop
// map을 만든 다음에 하나씩 하나씩 추가하는 방식 == Map Constructer 방식
// const m = new Map();
// m.set(`color`, `red`);
// m.set(`age`, 2);

// console.log(m);  // Map(2) { 'color' => 'red', 'age' => 2 }
// 0: {"color" => "red"}
//   key: "color"
//   value: "red"
//1: {"age" => 2}
//   key: "age"
//   value: 2

// console.log(m.get(`color`)); // red
// console.log(m.get(`age`));  // 2

// // m.delete(`color`);

// // console.log(m);  // Map(1) { 'age' => 2 }

// // m.clear();
// // console.log(m); // [] 텅 빈 상태로 바뀌게 됌.

// console.log(m.has(`color`));  // true
// console.log(m.size);  // 2


/* 89 - Map - keys( ), values( ), entries( )
// Map Literal
const m = new Map([[`color`, `red`], [`owner`, `Flavio`], [`age`, 2]])
// Map은 key, value/ key, value 로 구성되고있음.

// console.log(m); // Map(3) { 'color' => 'red', 'owner' => 'Flavio', 'age' => 2 }

for (const k of m.keys()) {
  console.log(k)   // color, owner, age
}

for (const k of m.values()) {
  console.log(k)   // red, Flavio, 2
}

for (const [k, v] of m.entries()) {
  console.log(k, v);   // color red, owner Flavio, age 2
}

for (const [k, v] of m) {
  console.log(k, v);   // color red, owner Flavio, age 2
}

// Object vs Array vs Map
// Map이라고 하는 것은 Object를 좀 더 array에 가깝게 구성하는 datatype. 그래서 대용량의, 용량이 큰 것들이 많을 때 Object에 비해서 Map으로 처리하는게 훨씬 더 컴퓨터 자원을 적게 소모하며 처리할 수 있다. 한마디로 연산속도가 훨씬 더 빠르다.  
*/

/* 90 - Map - Spread
const m = new Map([[`color`, `red`], [`owner`, `Flavio`], [`age`, 2]])
// Map은 key, value/ key, value 로 구성되고있음.

console.log(m); // Map(3) { 'color' => 'red', 'owner' => 'Flavio', 'age' => 2 }

만약에 Map의 key들만 뽑아보고 싶다면 ?
const a = m.keys();
console.log(a); // {}   이건 아님

const a = [m.keys()];
console.log(a);  //  [ [Map Iterator] { 'color', 'owner', 'age' } ]   이것도 아님

const a = [...m.keys()];   // Spread Operator
console.log(a);   // [ 'color', 'owner', 'age' ] 이거네!!

const b = [...m.values()];   // Spread Operator
console.log(b);   // [ 'red', 'Flavio', 2 ]  

const c = [...m.entries()];   // Spread Operator
console.log(c);  // [ [ 'color', 'red' ], [ 'owner', 'Flavio' ], [ 'age', 2 ] ]
*/


/* 91 - Set 기초
// Set    기본적으로 Map과 대동소이. 하나정도가 다름.
let animals = new Set();   

animals.add('🐷');
animals.add('🐼');
animals.add('🐢');
animals.add('🐿');
console.log(animals.size); // 4
animals.add('🐼');
console.log(animals.size); // 4  이게 Map과 Set의 차이
// Map은 그냥 추가하면 추가되지만은 Set은 반복되는 item은 자동적으로 취소(삭제)함.   

console.log(animals.has('🐷')); // true
animals.delete('🐷');
console.log(animals.has('🐷')); // false


animals.forEach(animal => {
  console.log(`Hey ${animal}!`);
});
// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

console.log(animals); // Set {} ==> Set이라는 것은 알 수 있지만, 그 안에 무엇이 들었는지는 알 수 x, 그래서 안에 무엇이 들어있는지 확인하려면 forEach를 하던가 혹은 다른 명령을 줘야한다.  

animals.clear();
console.log(animals.size); // 0

let myAnimals = new Set(['🐷', '🐢', '🐷', '🐷']);

console.log(myAnimals.size); // 2


myAnimals.add(['🐨', '🐑']);
// myAnimals.add('🐨', '🐑');  // 요런 식으로는 코딩하지 말라는 겁니당. + 두개 다 안나오고 앞에 아이만 나옴.
myAnimals.add({ name: 'Rud', type: '🐢' }); // // 요런 식으로는 코딩하지 말라는 겁니당
console.log(myAnimals.size); // 4  동작은 하네용

myAnimals.forEach(animal => {
  console.log(animal);
});
// 🐷
// 🐢
// ["🐨", "🐑"]    // Aarray 자체가 통째로 들어감
// Object { name: "Rud", type: "🐢" }  // Object 자체가 통째로 들어감

// 요런 식으로는 코딩하지 말라는 겁니당 ==> 이유: Set을 만들때에는 element들이 하나로 같은 종류여야 해용 '돼지'랑 '거북이'는 하나의 동물인데 3번째거는 하나의 array고 네번째는 하나의 object자나용, 이렇게 서로 다른 종류를 섞어서 Set을 구성하면 말라는 겁니당. 동작은 하는데 그런식으로 코딩하는 것은 바람직하지 않다는 겁니당.
//*/


/* 92. Set methods
console.log('Only unique characters will be in this set.'.length); // 43

let sentence = new Set('Only unique characters will be in this set.');
console.log(sentence.size); // 18  반복되는 character들은 다 삭제한다는 거죵

let moreAnimals = new Set(['🐺', '🐴', '🐕', '🐇']);
// iterable(item을 하나씩 셀 수 있다) == a kind of array
for (let animal of moreAnimals) {
  console.log(`Howdy ${ animal }`);
}
// Howdy 🐺
// Howdy 🐴
// Howdy 🐕
// Howdy 🐇

// iterable한 data type의 특징 = next()
let partyItems = new Set(['🍕', '🍾', '🎊']);

console.log(partyItems);  // Set(3) {"🍕", "🍾", "🎊"}

// let items = partyItems.values();
// console.log(items.next());  // {value: "🍕", done: false}
// console.log(items.next());  // {value: "🍾", done: false}
// console.log(items.next());  // {value: "🎊", done: false}
// console.log(items.next());  // {value: undefined, done: true}
// console.log(items.next().done);  // true


let keys = partyItems.keys();
console.log(keys.next());  // {value: "🍕", done: false}
console.log(keys.next());  // {value: "🍾", done: false}
console.log(keys.next());  // {value: "🎊", done: false}
console.log(keys.next());  // {value: undefined, done: true}
console.log(keys.next().done);  // true
// next라고 하는 것은 항상 key를 보여주는 것이 아니라 item(value)만을 보여준다.

// Object {
//   done: false,
//   value: "🍕"
// }

// Object {
//   done: false,
//   value: "🍾"
// }

// Object {
//   done: false,
//   value: "🎊"
// }

// true

// donne: false 는 다 아직 안둘러봤다는 뜻, 다 둘러봤으면 true.
*/

/* 93. next() method = array, map, set
var set1 = new Set(); 
  
// adding element to the set 
set1.add(50); // value without key  // Map은 key+value였지만, Set같은 경우 value만 줄 수 있음
set1.add(40); 
set1.add(30); 
set1.add(20); 
set1.add(10); 

console.log(set1);  // Set(5) {50, 30, 40, 20, 10}
  
// using entries to get iterator 
var getEntriesArry = set1.entries(); 
var getKeysArry = set1.keys(); 
var getValuesArry = set1.values(); 
// each iterator is array of [value, value] 
// prints [50, 50] 
console.log(getEntriesArry.next());  // {value: Array(2), done: false}  // 자동적으로 key와 value를 만듬
console.log(getEntriesArry.next().value); 

// prints [40, 40] 
console.log(getEntriesArry.next().value); 
  
// prints [30, 30] 
console.log(getEntriesArry.next().value);  
  
// prints [20, 20] 
console.log(getEntriesArry.next().value); 

// prints [10, 10] 
console.log(getEntriesArry.next().value); 

// prints nothing 
console.log(getEntriesArry.next().value); // undefined
console.log(getEntriesArry.next()); // {value: undefined, done: true}

// next라고 하는 function은 주로 어떤 Set이든 혹은 Map이든 혹은 Array이든 각각의 아이템들을 불러오는, 그니까 어떤 집합속에 있는 원소들을 하나씩 하나씩 차례차례 순서대로 불러오는 역할을 함.
// 불러오는 순서는 들어가있는 순서.
// nest를 한번 호출하고 나면 자동으로 그 다음 단계로 넘어감.  그냥 console.log(getEntriesArry.next());를 하던가  console.log(getEntriesArry.next().value); 하던가 상관없이 한번 호출되었으면은 그 다음 단계로 넘어간단 말이죵.

// !!! 우리는 하나의 item(value)를 넣었지만은 Set은 반드시 key + value 형식으로 저장을 한다는 것.그래서 add(50)을 하더라도 [50, 50] 이런 식으로 쓰인다는 거에요, 그래서 key를 뽑더라도 50, 40, 30, 20, 10 이 나오고 value를 뽑더라도 50, 40, 30, 20, 10이 나온다는 것. 

//*/