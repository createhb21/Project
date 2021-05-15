      /* loops: while and for
      while (boolean expression == true or false => true일 경우 실행, false일 경우 실행x) {
      }
      Boolean Expression => true를 쓸 떄 주의해야(끝없이, 무한히 반복되서 computer down.). true 값이 주어질 수 있는 조건식을 주어서 그 조건식을 만족할 떄 까지만 돌아가도록 해야함.
      while (true) {
        console.log(1)
      }
      while (false) {
        console.log(1)
      }

      // Boolean Expression == a formula(공식) which returns true or false.

      while (Boolean Expression) {

      }

      let i = 0;
      while (i < 3) { // true를 절대 적는 것이 아니라, true 값을 return 할 수 있는 formula를 작성해야한다.
        console.log(i);
        i++;
      }      // 0, 1, 2

      let i = 3;
      while (i > 0) {
        console.log(i);
        i--;
      }        // 3, 2, 1

      for loop => for 문장과 while 문장은 기본적으로 동일한 것이다. 문장 구조만 다른 것.
      
      for (let i = 0; i < 3; i++) {
        console.log(i);
      }          // 0, 1, 2
      //  let i = 0; ==> begin
          i < 3 ==> condition
          i++ ==> step
          console.log(i); ==> body  

      for (let i = 3; i > 0; i--) {
        console.log(i);
      }          // 3, 2, 1
      */

    

      /* continue, break
      // continue한다는 것은 if (i % 2 == 0)이 true(참)일 때, 밑에 있는 console.log(i)를 실행하지 않고, 바로 다시 위의 식으로 올라간다는 것. => body를 건너뛰고 다시 step => condition으로 감. 
      for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) continue;  
        console.log(i);
      }      // 1, 3, 5, 7, 9

      for (let i = 0; i < 10; i++) {
        if (i % 2) continue;  // 0 == false |||   1, 2, ... == true
        console.log(i);
      }        // 0, 2, 4, 6, 8

      i == 0
      body
      i++
      i < 10
      body
      i++
      // step => condition => body 반복.

      // break => loop 자체를 그만둠. 그니까 아예 빠져나와버리는 것. => Loop :: step => condition => body
      for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) break;  
        console.log(i);
      } 

      console.log("I an kicked out!!")            // // I am kicked out!! 

      for (let i = 0; i < 10; i++) {
        if (i % 2) break;  
        console.log(i);
      }            

      console.log("I am kicked out again!!")        // 0, I am kicked out again!! 
      */

      /*
      Expression == Return value
      Statement == Others than returning value
      
      The "switch" statement
      let value;
      switch(value) {
        case 'value1': // value == 'value1' ?
        //...
        case 'value2':
        //...
        default:
        //...
      }

      let value = 1;
      switch(value) {
        case 1: // value == 'value1' ? true? false?
          console.log("Hi, I am 1!")
        case 2:
          console.log("Hi, I am 2!")
        case 3:
          console.log("Hi, I am 3!")
        default:
        //...
      }

      let value = 1;
      switch(value) {
        case 1: // value == 'value1' ? true? false?
          console.log("Hi, I am 1!")
          break;             // break;
        case 2:
          console.log("Hi, I am 2!")
          break;             // break;
        case 3:
          console.log("Hi, I am 3!")
          break;             // break;
        default:
          console.log("Hi, I am default")
          //...
      }
      console.log("Hi, I am out of switch statement.")


      let value = 2;
      switch(value) {
        case 1: // value == 'value1' ? true? false?
          console.log("Hi, I am 1!")
          break;             // break;
        case 2:
          console.log("Hi, I am 2!")
          // break;             // break;
        case 3:
          console.log("Hi, I am 3!")
          break;             // break;
        default:
          console.log("Hi, I am default")
          //...
      }
      console.log("Hi, I am out of switch statement.")

      let value = "2";     // not comparable => 항상 같은 type끼리 맞춰줘야한다!! +기호를 사용하는 특별한 케이스는 좋지 못함.
      switch(value) {
        case "1": // value == 'value1' ? true? false?
          console.log("Hi, I am 1!")
          break;             // break;
        case "2":
          console.log("Hi, I am 2!")
          break;             // break;
        case "3":
          console.log("Hi, I am 3!")
          break;             // break;
        default:
          console.log("Hi, I am default")
          //...
      }
      console.log("Hi, I am out of switch statement.")

      let value = "2";  //  Character Type "2"
      // let value2 = 2;  //  Number Type 2
      // console.log(value) // 2
      // console.log(+value) // 2 => "2"를 number로 변환해서 보여줌. but 쓰지마라 걍!!!
      switch(+value) {
        case 1: // value == 'value1' ? true? false?
          console.log("Hi, I am 1!")
          break;             // break;
        case 2:
          console.log("Hi, I am 2!")
          break;             // break;
        case 3:
          console.log("Hi, I am 3!")
          break;             // break;
        default:
          console.log("Hi, I am default")
          //...
      }
      console.log("Hi, I am out of switch statement.")

      // statement => 어떤 값을 return하는 게 아니라 그냥 화면에다가 어떤 정보를 보여줄 뿐(글자를 화면에다가 프린트하는 것 != 값을 리턴하는 것).
      let value = "Jupeter";
      switch(value) {
        case "Jupeter": // value == 'value1' ? true? false?
          console.log("Hi, I am Jupeter!")
          break;             // break;
        case "Hyobum":
          console.log("Hi, I am Hyobum!")
          break;             // break;
        case "Ellie":
          console.log("Hi, I am Ellie!")
          break;             // break;
        default:
          console.log("Hi, I am Holland")
          //...
      }
      console.log("Hi, I am out of switch statement.")
      // */

      /*
      // Functions
      Function Declaration == declare(선언한다) + tion(명사) == 선언
      function, function name(myMessage), head(()) == parameter == argument, body{} == implementation(이행,  실행)
      function myMessage () {
        console.log("Hi, I am your first function.")
      }

      // Call/implement/execute a function => function을 호출한다.
      myMessage(); // executing the body of the function myMessage => myMessage라고 하는 function의 body가 실행된다.
      // 정의만 하는 걸로는 뭐 아무것도 일어나지 x, call a function을 해서 function을 호출해야 function의 body가 실행. ()는 꼭 필수.

      console.log(myMessage) // f myMessage() => function 자체를 화면에 보여달라는 것이다.
      console.log(myMessage()) // console.log 내에 또 console.log를 두는 행위임. 바람직하지 않다. => myMessage라는 function을 실행한 결과를 보여달라는 것.
      // console.log(console.log("Hi, I am your first function."))와 같은것. 바람직 x 
      모든 function들은 반드시 return값을 가지게 된다.
      그럼 function myMessage() {
              console.log("Hi, I am your first function.")
           } // 은 무엇은 return한 것인가..? 아무것도 return한 게 없다. 그러니까 실제로 return한 게 없이, 이럴 때는 undefined가 return된다고 본다. 어려운 개념이니까 function은 다 return한다고만 기억

      function myMessage() {
        return "Hi, I am Jupeter"
      }

      myMessage(); // 아무 것도 console에 나오지 x
      console.log(myMessage) // f myMessage()
      console.log(myMessage())  // Hi, I am Jupeter
      console.log("Hi, I am Jupeter") // Hi, I am Jupeter
      */


      /*
      // 22. Function and Scope
      // Scope
      // Global Scope
      let hero1 = "Jupeter";
      let hero2 = "Batman";
      let hero4 = "Wonderwoman";
      // Local Scope
      function heroes() {
        // Local
        let hero1 = "Superman";
        let hero3 = "Ironman";
        console.log(hero1)   // Superman
        console.log(hero3) // Ironman
        
        // Local in Local 
        function students() {
          let student = "Alice"
          console.log(hero4); // Wonderwoman
          console.log(student) // Alice
          console.log(hero3); // Ironman
        }

        students(); // students를 실행해서 hero4, student, hero3이 콘솔에 출력됌
      }

      console.log(hero1);  // Jupeter  // 1
      console.log(hero2);  // Batman // 2
      console.log(hero3); // x , can not find name 'hero3' => not working.

      console.log(heroes());  // Superman, Ironman, Wonderwoman, Alice, Ironman, undefined
      // */

      /*
      // parameter or Argument
      // Function Definition
      function myFn(arg) {            // function을 argument에 apply(적용)한다. 
        let result = arg * 3;
        return result;
      }

      let myResult = myFn(5);
      console.log(myResult); // 15

      function myFn(arg1, arg2) {    
        let result = arg1 * arg2;
        return result;
      }

      let myResult = myFn(5, 5);
      console.log(myResult);    // 25
      
      // Default == 다른 어떤 무언가가 없을 때 기본적으로 제공되는 것.
      function myFn(arg1, arg2 = 5) { 
        let result = arg1 * arg2;
        return result;
      }

      let myResult = myFn(5);
      console.log(myResult);    // 25

      function myFn(arg1, arg2 = 5) { 
        let result = arg1 * arg2;
        return result;
      }

      let myResult = myFn(5, 6);    // 6 을 주면 6을 쓰고, 안주면은, 아무것도 안주면은 default 값인 5를 쓰겠다. // we apply myFn to arg1 and arg2 == we call myFn function with 5 and 6.
      console.log(myResult);   // 30
      */
      
      
      /*
      Function expressions, callback, and arrows
      = 기호를 사이에 두고, 왼쪽의 Term/Name/Variable은 보이지만, = 기호의 오른쪽은 어디서도 안보인다.
      
      let myVar1 = function myFn(arg) {    // function 자체를 변수에 담을 수 있음.
        let myVar2 = 10;
        return arg ** 2;
      } // Block needs no semicolon.   // Function Value
      
      let myVar3 = 3;    // Number Value
      let myVar = "Jupeter";  // String Value
      
      myVar1(5);    // myVar은 볼 수 있지만, = 오른쪽에 있는 function은 볼 수가 없다. myFn(5);는 잘못된 것.
      console.log(myVar1(5));  // 25
      
      function myFn1() {
        return 10;
      }

      function myFn2(arg) {
        let result = arg() * 2;
        return result;
      }

      let outerResult = myFn2(myFn1);
      console.log(outerResult);   // 20 

      function myFn1() {
        return 10;
      }

      function myFn2(arg) {
        let result = arg * 2;
        return result;
      }

      let outerResult = myFn2(myFn1());
      console.log(outerResult);       // 20
      
      function myFn1() {
        return 10;
      }

      function myFn2(arg) {
        let result = arg() * 2;
        return result;
      }

      let myVar1 = myFn1;
      let myVar2 = myFn1();

      console.log(myVar1);     // f myFn1()   => function이 들어가 있고
      console.log(myVar2);     // 10 => function이 실행된 결과 들어가 있음.
      function 자체가 argument로 전달될 수 있다는 것을 기억하자! 또한 마찬가지로 function을 return할 수도 있다. 
      */
      

      /*
      25. First Order Function => function을 argument로 받거나 혹은 function 자체를 return하는 function.
      function myFn2(arg) {
        let result = arg * 2;
        return function myFn1(result) {
          return result + 10;
        };
      }

      let returnedFn1 = myFn2(7);
      let returnedFn2 = myFn2(7)();
      
      console.log(returnedFn1); // f myFn1()   => myFn1 이라는 function이 return되어 나온다. 
      
      function myFn2(arg1) {
        return function myFn1(arg2) {
          return arg2 + 10;
        };
      }

      let returnedFn1 = myFn2(7);
      let returnedFn2 = myFn2(7)(15);  // 7 is a arg1, 15 is a arg2. => argument를 한번 더 줌. muFn2(7)이 function을 return하고 그 function이 return한 데에다가 15라는 argument를 전달하는 것.
      
      console.log(returnedFn1);    // f myFn1()
      console.log(returnedFn2);   // 25

      Coding is a just a logic.
      Logic is based on 3 principles: A = A, A = !A, A or !A // A는 A이다, A는 A가 아닌 것이 아니다, A는 A이거나 A가 아니거나 둘 중에 하나다.
      복잡한 것은 단순한 것의 반복.
      홍길동은 홍길동이다. 홍길동은 홍길동이 아닌 사람이 아니다. 이 사람은 홍길동이거나 아니거나 둘 중 하나다.
      */

      /*
      //26. Callback == a First Order Function 중에 하나   =>   다른 function에 argumnet로 전달되어서, 다른 function 안에서 호출되는(call)... 그러한 function을 callback이라고 한다.

      // Call function b with argument 10 or 1.
      function myFn1(a, b) {
        let result = (a > 5)? b(10): b(1);
        return result;
      }

      function myFn2(arg) {
        return arg * 6;
      }

      let outerResult = myFn1(3, myFn2);
      console.log(outerResult);  // 6

      function myFn1(a, b) {
        let result = (a > 5)? b(10): b(1);
        return result;
      }

      function myFn2(arg) {
        return arg * 6;
      }

      let outerResult = myFn1(10, myFn2);
      console.log(outerResult);  // 60
      */


      /*
      27. Function Declaration and Function Expression

      Function Declaration

      console.log(myFn(5));  // 8     -> ok (예외적으로 정의하기도 전에 불러서 호출할 수 있다.)
      console.log(c(5));  // error (정상적인 코드 실행 순서)

      function myFn(arg) {
        return arg + 3;
      }

      // Function Expression == Operation이 진행되는 == Operators + Operands
      let a = 1;    // expression
      let b = a + 1;   // expression
      let c = function myFn(arg) {
                return arg + 3;
              }          // Function Declaration은 순서에 개의치 않는다. 어디에 있든 불러서 쓸 수 있다.

      console.log(myFn(5));   // 8
      console.log(c(5));    // 8
      */


      /*
      28. Javascript Specials
      // Arrow function
      console.log(myFn1(5)); // 6 불러서 쓸 수 있음.
      console.log(myFn2(5));  // error (expression이라서) 미리 위에서 쓸 수 없음.

      // Function Declaration 
      function myFn1(arg) {
        let result = arg + 1;
        return result;
      } 

      // Function Expression
      let myFn2 = (arg) => arg + 1;        // // Aroow function

      console.log(myFn1(5));      // 6
      console.log(myFn2(5));      // 6

      let myFn2 = (arg) => {        // body가 좀 길어질 때는 이렇게! myFn1이랑 완전히 똑같은 문장, 똑같은 return.
        let result = arg + 1;
        return arg;
      }

      // 다른 점이 둘. 그 중 첫째는...
      console.log(myFn1(5));      
      console.log(myFn2(5));
      */

      
      /* 29. Object
      primitive types --> integer, string, boolean ... 
      stuructured types --> object, array, tuples ... 

      let myObject = new Object(); // constructor == con(함께) + struct(구조) + or(행위자 또는 행위 주체) 

      console.log(myObject);  // {}

      let heroes = {};
      console.log(heroes);   // {}

      // key: value
      let heroes = {     // 변수들을 묶어 놓은 것이 Object다.
        name: "Superman",
        age: 33,
        address: "제주시 한경면 판포리",
      };

      console.log(heroes.name);   // Superman
      console.log(heroes.age);   // 33
      console.log(heroes.address);   // 제주시 한경면 판포리

      let heroes = {     // 변수들을 묶어 놓은 것이 Object다.
        // property = key + value
        name: "Superman",
        age: 33,
        "current address": "제주시 한경면 판포리",   // 이렇게 사용할 순 있지만, 바람직하지 않다.
      };

      console.log(heroes.name);   // Superman
      console.log(heroes.age);   // 33
      console.log(heroes["current address"]);   // 바람직 하지 않음. 카멜케이스를 활용하는 것이 바람직하다.


      let heroes = {     // 변수들을 묶어 놓은 것이 Object다.
        // property = key + value
        firstName: "Superman",
        age: 33,
        currentAddress: "제주시 한경면 판포리",   
      };

      let newKey = "sex";      // don't do that
      heroes[newKey] = "male";   //이런식으로 newKey라는 Object에 property를 추가가능, key = "sex", value="male" // don't do that

      // 혹은 다음과 같은 형식으로 property를 추가할 수 있음.
      heroes["sex"] = "male"; 

      console.log(heroes);

      console.log(heroes.firstName);   // Superman
      console.log(heroes.age);   // 33
      console.log(heroes.currentAddress);   // 제주시 한경면 판포리
      console.log(heroes.sex);   // male

      function makeHeroes(name, age, address) {
        return {
          heroName: name,
          heroAge: age,
          heroAddress: address,
        }
      }
      let newHero = makeHeroes("Batman", 23, "제주시 한경면 판포리");
      console.log(newHero);    //  { heroName: 'Batman', heroAge: 23, heroAddress: '제주시 한경면 판포리' }

      // Constructor function   -> Object는 structure data type(구조를 가지고 있는 데이터타입)이니까, 구조를 가지고 있는 데이터타입을 만들어 내는 function이다. 이말임.
      function makeHeroes(name, age, address) {
        return {
          name,     // == name: name,
          age,      // == age: age,
          address,  // == address: address, 와 똑같은 효과 o
        }
      }

      let newHero = makeHeroes("Birdman", 53, "제주시 한경면 판포리");
      console.log(newHero);  // { name: "Birdman", age: 53, address: "제주시 한경면 판포리" }
      */


      /* 32. Object (for .. in) // for .. in -> 어떤 object에 있는 key들만 뽑아서 볼 때 사용
      let codes = {
        "49": "Germany",
        "41": "Switzerland",
        "44": "Great Britain",
        // ...,
        "1": "USA"
      };

      for(let code in codes) {   // code 에는 아무 단어나 넣어도 된다. 왜냐하면 어떤 단어를 넣든간에 무조건 property의 key를 받아들이도록 되있음.
        console.log(code); // 1, 41, 44, 49   / string인데도 자동으로 숫자로 변환해서 숫자의 순서대로 표시  를 한다.
      }

      let codes1 = {
        "ger": "Germany",
        "swz": "Switzerland",
        "brt": "Great Britain",
        // ...,
        "usa": "USA"
      };

      let codes2 = {
        34: "Germany",
        23: "Switzerland",
        67: "Great Britain",
        // ...,
        45: "USA"
      };


      for(let code in codes1) { 
        console.log(code);       // ger, swz, brt, usa    -> 문자열인 경우에는 그냥 순서대로
      }
      for(let code in codes2) { 
        console.log(code);       // 23, 34, 45, 67    -> 숫자인 경우에는 숫자 작은순부터 
      }
      */

      /*
      // copy by reference
      // memory has objects, variables has address of obects in memory. 
      let student1 = {
        name: "Superman",
        study: "Javascript"
      }

      let student2 = student1;
      let student3 = student2;

      student2.name = "Batman";


      console.log(student1.name); // Batman
      console.log(student2.name); // Batman
      console.log(student3.name); // Batman 
      */

      /* Object Cloning
      let student1 = {
        name: "Superman",
        study: "Javascript"
      }

      let student2 = {};

      for (let key in student1) {
        student2[key] = student1[key];
      }

      console.log(student2); // {name: "Superman", study: "Javascript"}

      student2.name = "Birdman";

      console.log(student1.name);   // Superman
      console.log(student2.name);   // Birdman
      */


      /* 35. Object assign
      let student1 = {
        name: "Superman",
        study: "Javascript"
      }

      let student2 = {};

      Object.assign(student2, student1);

      console.log(student1.name);      // Superman
      console.log(student1.name);      // Superman 

      let student1 = {
        name: "Superman",
        study: {
          field: "JavaScript",
          year: 3 
        } 
      }

      let student2 = {
        name: "Ironman",
        study: {
          field: ""
        },
      };
      // console.log(student2.name);

      Object.assign(student2, student1); 

      // console.log(student1.name);  // Superman
      // console.log(student2.name);  // Superman

      student2.name = "Birdman";
      student2.study.field = "Haskell";

      // console.log(student1.name);  // Superman
      // console.log(student2.name);  // Birdman
      console.log(student2.study);  // { field: 'Haskell', year: 3 }
      console.log(student1.study);  //  { field: 'Haskell', year: 3 }
      console.log(student2.study.field);  // Hakell 
      console.log(student2.study.year);  // 3

      
      let student1 = {
        name: "Superman",
        study: "Javascript"
      }

      let student2 = {
        name: "Ironman",
        study: ""
      };
      console.log(student2.name);  // Ironman

      Object.assign(student2, student1);

      student2.name = "Birdman";

      console.log(student1.name);  // Superman
      console.log(student2.name);  // Birdman
      console.log(student2.study);  // Javascript 
      // */


      /*
      // Object Deep Cloning
      let student1 = {
        name: "Superman",
        study: {
          field: "Javascript",
          year: 3 
        } 
      };

      let student2 = {
        name: "Ironman",
        study: {
          field: ""
        }
      };
      // console.log(student2.name);

      Object.assign(student2, student1);

      // console.log(student2.name);

      student2.name = "Birdman";
      student2.study.field = "Haskell";

      

      // console.log(student1.name);
      // console.log(student2.name);
      console.log(student2.study);  // {field: "Haskell", year: 3}
      console.log(student1.study);  // {field: "Haskell", year: 3}
      console.log(student1.name); // Superman 
      
      // Deep Cloning -> Object 속에 있는 Object도 복사할 때 완전히 새로운 Object가 만들어지게 하는..
      // */

      /*
      37. Object method "this"
      가급적 this를 쓰지 말 것. 꼭 써야 될 때에는 정확히 이해하고, 매우 조심해서 사용.
      주어(s) + 동사(v) = 절(clause) 또는 문장(sentence)
      this, that, he, you => 대명사
      this = 지시 대명사 
      Javascript에서 this는 동사구 내에서 사용되며, 주어를 가리킨다.
      문장 = 명사구 + 동사구 ==> 명사와 동사 간의 합이 맞아야 한다.
      1) 새(명사)가 하늘 높이 날아간다(동사). (O)  ===> 어울림이 있다.
      2) 지렁이(명사)가 힘차게 날개짓한다(동사). (X) ===> 합이 맞지 않다, 어울림이 없다.
      Javascript의 명사(Object)와 동사(Function)은 하나의 문장을 구성하기 위해서는 반드시 어울림이 선행되어야 한다.
      JS의 문장 = object.function()
      어울리는 방법이 무엇이냐? ===> property assingment
      */


      /*
      // 38. Object method - this
      let rsuperman = {
        name: 'Supeman',
        age: 30,
        skill: function() {   // 여기서는 this가 무엇인지 모른다. 다만 짐작할 수 있다.
          console.log(`I am ${this.name}, I can fly!`)}
      }

      // console.log(superman);   // { name: 'Superman', age: 30, skill: [Function: skill] }

      let birdman = {
        name: 'Birdman',
        age: 30,
        skill: function() {   // 여기서는 this가 무엇인지 모른다. 다만 짐작할 수 있다.
          console.log(`I am ${this.name}, I can fly!`)}
      }

      // console.log(superman.name); // Superman

      // 여기서 this가 무엇인 지 결정난다.
      superman.skill();   // I am Superman, I can fly!  // this.name == superman.name 
      superman.skill();  // Dot notation = 점 앞에 있는 무엇(object)가 주어, 점 뒤에 있는 무엇(function)이 동사.

      function skill() {
          console.log(`I am ${this.name}, I can fly!`)}

      // top level function declaration
      function study() {
          console.log(`I am ${this.name}, I study Javascript basic with Team Jupeter.`)
      }

      // learn();

      superman[`learn`] = study; // superman에 learn이라고 하는 property에 study라는 function을 담겠다. ===> 어울림
      superman['learn']();  // 위에처럼 해준 다음, 호출   // I am Superman, I study Javascript basic with Team Jupeter.
      // // superman.learn();   // 이렇게 하지 마세요. 외부의 function을 가져오는건지 원래 정의되있는 function인건지 구분이 안된다. 따로 구분을 시켜 줄 필요성이 있다.

      // superman.skill();

      birdman[`learn`] = study;  
      birdman['learn'](); // 위에처럼 해준 다음, 호출   // I am Birdman, I study Javascript basic with Team Jupeter.
      // birdman.learn();  이렇게 하지 마세요. 왜냐하면 learn()이 birdman 오브젝트의 기존 property로 오해될 수 있다.
      // birdman.skill();
      // */
