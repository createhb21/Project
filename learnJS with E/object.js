'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; 의 집합체
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);  // ellie, 4

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);   // true   가능하면 이런 식으로 추가하는 행위는 x

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);    // undefined

// 2. Computed properties == 계산된 properties
// key should be always string
console.log(ellie.name);   // ellie
console.log(ellie['name']);  // ellie   -> Computed properties, should be always string('')  정확하게 어떤 키가 필요한 지 모를 때, 즉 runtime에서 결정될 때 사용. 그래서 코딩할 떄는 그냥 
// dot을 쓰는 게 맞음. 실시간으로 원하는 key의 값을 받아오고 싶을 때에는 Computed properties를 쓰는거임. 나중에 동적으로 key에 관련된 value를 받아와야 할 때 유용하게 쓸 수 있다.
ellie['hasJob'] = true;
console.log(ellie.hasJob);  // true

// Computed properties를 써야하는 예
function printValue(obj, key) {
  console.log(obj[key]);   // 동적으로 key에 관련된 value를 받아와야 할 때 유용하게 쓸 수 있다.
}
printValue(ellie, 'name');  // ellie
printValue(ellie, 'age');   // 4 

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4); // {name: "ellie", age: 30}

// 4. Constructor Function   ==> Object 뽑아내는 공장!!!
function Person(name, age) {   // 함수 이름 대문자
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)   해당하는 Object 안에 key가 있는지 없는지 확인.
console.log('name' in ellie);  // true  => name이라는 key가 ellie라는 object안에 있는지 없는지 true or false.
console.log('age' in ellie);  // true
console.log('random' in ellie);  // false
console.log(ellie.random);  // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {   // for.. in ==> ellie가 가지고 있는 key들이 block qute안을 돌 때마다 key들이 key라는 지역변수에 할당된다. -> 모든 key들을 받아와서 일을 처리하고 싶을 때 사용.
  console.log(key);   // ellie안에 있는 모든 key들이 출력.
}

// for (value of iterable(반복되는것))
const array = [1, 2, 4, 5];
for (let value of array) {    // for.. of
  console.log(value);  // 1, 2, 4, 5
}

// 7. Fun cloning

const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);  // {name: "coder", age: "20"}

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);   // {name: "coder", age: "20"}

// Object.assign(dest, [obj1, obj2, obj3...])
const user4 = Object.assign({}, user);
console.log(user4);  // {name: "coder", age: "20"}

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);  // 뒤에 나오는 아이일수록 앞에 동일한 property가 있다면 값을 계속 덮어씌우기 때문.
console.log(mixed.color);  //  blue
console.log(mixed.size);  //  big

