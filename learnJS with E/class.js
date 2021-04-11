'use strict';
// Object-oriendted programming  객체 지향 프로그래밍
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  constructor(name, age) {  // constructor => 생성자를 이용해서 나중에 Object를 만들 때 필요한 data를 전달.
    this.name = name;   // fields
    this.age = age;   // fields
  }

  speak() {  // methods
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

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;   // _age를 쑬 수 있는건 특별한 getter와 setter 때문임.
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;  // _age를 쑬 수 있는건 특별한 getter와 setter 때문임.
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);  // 0

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);    // 2
console.log(experiment.privateField);   // undeefined

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);  // undefined
console.log(Article.publisher);    // Dream Coding
Article.printPublisher();    //   Dream Coding

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// extends   == shape에 있는 모든 field와 mothod들이 Rectangle에 포함되게 된다.
class Rectangle extends Shape {} 
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 drow도 잊지 안호 호출해주는 기능!
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2; // overwriting!!
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();  // drawing blue color! 
console.log(rectangle.getArea());  // 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw();  // drawing red color!
console.log(triangle.getArea());  // 200

// 6. Class checking: instanceOf  // 이 class를 이용해서 만들어진 아이인지 아닌지 확인할 수 있음.
console.log(rectangle instanceof Rectangle);  // true
console.log(triangle instanceof Rectangle);   // false
console.log(triangle instanceof Triangle);   // ture
console.log(triangle instanceof Shape);   // true
console.log(triangle instanceof Object);  // true
console.log(triangle.toString()); // Triangle: color: red

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj); // { value: 7}

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
// change(obj);
console.log(obj); // { value: 5}