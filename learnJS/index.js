    /*
    Code structure
    Code == language for cumputer to read.
    
    Statement and Expressione
    Statement == ask computer to do something.
    Expression == ask computer to return a value.

    let a = 1 + 1;   // Evaluation == e(힘을 주다, 실천하다) + value(값, 가치) + tion(명사) === Expression

    console.log(a); // Statement
    */



    
    /* Variable 
    Variable == vary(변한다) + able(할 수 있다)
    let message; // let : ~이게 하다, 시키다, 지정하다.
    message = "Hello, Jupeter" //string
    console.log(message);
    
    message = "Hi, again" // string value
    console.log(message);
    
    message = 1; // number value
    console.log(message);

    const anotherMessage =  "Hello, my friend"
    console.log(anotherMessage);
    
    //'const' declaration must be initialized.
    const == constant == 변하지 않는
    declaration == declare(선언하다) + tion(명사)
    initialized == initial(초기화 = 시작&준비&값을 할당) + lize(만들다)
    
    
    const ==> 선언과 동시에 갑을 할당해야함
    const message = "Hello, Jupeter"
    const message; // message라는 이름의 박스는 const 타입이다. == 선언
    message = "Hello, Jupeter" // 값을 할당
    const ==> read-only

    let myMessage; // 변수 선언
    myMessage = "I'm Jupeter" // 할당 = initialization(첫번째로 할당) , assignment(그냥 한번이든 두번이든 여러번이든 할당하는 행위 자체) == assign + ment
    myMessage = "I'm still Jupeter"
    */



    /* Data types
    //string
    let message1 = "hello, Jupeter"; // double quotes
    let message2 = 'hello, again'; // single quotes
    let message3 = 42; // single quotes, number 
    let message4 = null // null이라는 뭔가 있다. 0과 비슷.
    let message5 = true // bool or boolean, true or false
    let message6 = undefined // 아직 정해지지 않았다.
    let message7; // undefined ==선언(declare)만 하고, 값(value)이 아직 주어지지(asign) 않았다.

    console.log(message1);
    console.log(message2);
    console.log(message3);
    console.log(message4);
    console.log(message5);
    console.log(message6);
    console.log(message7);
    */


  /*
    Data Type ===> Number, String, Boolean, Object, Symbol, Function 
    Type Conversion ===> change the type
    Number => String : (+)
    String => Number :대부분의 경우
    let a = 1 + '2'; 
    console.log(a) // // 12 => only +. not -, *, /    

    let b = '1' + '2'; // 12
    console.log(b)

    let c = 'a' + 'b'; // ab
    console.log(c)

    let d = 1 + 2; // 3
    console.log(d)

    let e = '6' / 2; // 잘못된 연산이지만 자동으로 문자를 숫자로 바꿔줌. but 잘몬된 것임. 실제 동작하더라도 이러헤 사용x. *도 마찬가지.
    console.log(e)
    */


    /*
    Operator : +, -, *, /, =, (,), ^
    Operands : (Operator가 적용되는) 숫자들 ex) 3 + 4 => 3, 4는 Operands, +는 Operator
    Uvary, Bianary, Ternary => Operand가 하나만 있는 경우 Uvary, 두개 있는 경우 Binary, 세개가 있으면 Ternary  ==> Arity 저 셋을 다 합쳐서 Arity라고 표현.

    let x = 1;
    let y = -x; // Unary

    console.log(y);
    // Priority(우선순위) of operators
    console.log(2 + 3 - 1 * 4 / 2) // operators 간에 순서가 있다. => 1 * 4 -> 4 / 2 -> 2 + 3 => 5 - 2 === 3;
    console.log(2 + 3 - 1) * 4 / 2 // 괄호가 가장 우선순위가 높음. // 	unary negation, plus 는 * 이나 / 보다 우선순위가 높은 것을 주의.
    */


    /*
    Operators Increment Decrement
    let a = -1;
    console.log(+a) // a = 1? x , a = -1 // +는 뒤의 - 를 바꿀 수 x
    console.log(-a) // a = 1 ok.
    
    Remainder 나머지 
    console.log(5 % 3); // 5를 3으로 나눈 나머지
    console.log(7 % 4); // 7을 4로 나눈 나머지

    Exponentiation 지수  2 ** 2 // 2의 2성 === 4
    console.log(7 ** 3); // === 7 * 7 * 7 === 7^3 === 343
    */


    /*
    Increase 증가시키다 -> Increment 증가  
    let a = 3;
    console.log(a++); // 3    a를 출력하고(3), +1만큼 증가시킴
    console.log(a++); // 4
    console.log(a); // 5

    Decrese 감소시키다 -> Decrement 감소
    let b = 3;
    console.log(b--); // 3     b를 출력하고(3), -1만큼 감소시킴
    console.log(b--); // 2
    console.log(b); // 1

    let c = 3;
    console.log(--c); // 2     c를 -1만큼 감소시키고, 그 후 c를 출력(2)     
    console.log(--c); // 1
    console.log(c); // 1

    let d = 3;
    console.log(++d); // 4      d를 +1만큼 증가시키고, 그 후 d를 출력(4)     
    console.log(++d); // 5
    console.log(d); // 5

    let e = 1;
    console.log(2 * ++e); // 4
    console.log(2 * e++); // 4
    console.log(2 * --e); // 4
    console.log(2 * e--); // 4
    */



    /* Modify in place 그 자리에서 수정한다. 
    let a = 1;
    a = a + 3; //  ==> a와 3을 더하고(1과 3을 더하는 것이 먼저 일어나고), 그럼 4가 되고, 그 4를 a에게로 넣는다. => +보다 =가 우선순위가 낮다. 
    // = operator has the lowest priority
    console.log(a);  // 4

    let b = 1;
    b += 3;
    console.log(b);  // 4

    let c = 2;
    // c *= 3  // c = c * 3
    c *= 3 + 5  // c = c * (3 + 5) => 16;
    console.log(c); // 11 or 16   => 11 x, 16 ok
    */



    /* Assignment == assign(변수에 값을 할당) + ment(명사) 
    let z = 3 + 3 * 4;
    console.log(z); // 15

    let a, b, c = 6; // 제일 마지막에 있는 변수에만 값이 들어가고 앞에 두 개는 무시해버림. 
    console.log(a); // undefined
    console.log(b); // undefined
    console.log(c); // 6  

    let a, b, c; // declaration(변수 선언)

    a = b = c = 6; // c = 6이 먼저 되서 c가 6이 되고 그런 다음에 b에 6이 들어가고 그런 다음에 a에 6이 들어감. 그래서 a, b, c 몽땅 6이 들어감.

    console.log(a); // 6;
    console.log(b); // 6;
    console.log(c); // 6;
    
    let a, b, c;
    a = b = c = 6;
    console.log(3 - (c = b + 2)); // -5  // b + 2를 먼저 하고 그 값을 c에 넣고 그런 다음 3에서 c의 값을 뺌.   // -5
    */



    /* Comparison 비교 == Compare(비교하다) + ison(명사)
    //크기, 같은 지 다른 지
    Boolean: true or false
    >, >=, =<, <, ==, ===       ->         true or false
    console.log(1 > 2); // false
    console.log('a' > 2) // false, 문자와 숫자는 비교 x  
    console.log('a' > 'b') // false, 문자끼리 비교 하지마라.   
    console.log('a' < 'b') // true, 문자끼리 비교 하지마라. but 알파벳순.   
     console.log('a' > 'b') // false, 문자끼리 비교 하지마라. but 알파벳순.   
    console.log(0 == false) // 이렇게 하지마라
    console.log(1 == true) // 이렇게 하지마라
    console.log(1 == 'a') // 이렇게 하지마라, 비교 대상이 아닌 것을 비교하지마라.
    console.log('A' > 'a') // false 이렇게 비교해도 되는데, 소문자 a가 대문자 A보다 크다고 나옴.
    console.log('2' > 1) // true, 이렇게 하지마라. 왜 문자랑 숫자를 비교하냐.
    
    이정도만 알고 있음 됌. 빨간 밑줄나오는 건 그냥 하지마라.
    console.log(1 > 2); // false
    console.log('a' > 'b') // false
    console.log('a' > 'b') // false
    console.log('A' > 'a') // false
    console.log(true == 1) // true, 이렇게 하지마라
    console.log(false == 0) // true, 이렇게 하지마라
    
    Although JS permits various comparisons among diffrent data type such as number and string, number and boolean, or string and boolean,we should not compare diffrent data types.
    */


    /* Interaction: alert, prompt, confirm
    // alert("Hello");

    // prompt returns user input.
    let age = prompt('How old are you?', '100');
    alert(`You are ${age} years old!`);

    // confirm returns true or false.
    let isBoss = confirm("Are you the boss?");
    alert(isBoss);
    */


    /* Conditional operations: if, "?"
    let name = "Team Jupeter";

    if ( boolean expression ) // boolean expression : true와 false을 판단하는 문장. => true or false의 value를 return.
      if (name === "Team Jupeter") {
        console.log("Hi, Jupeter");
      }
      if (name === "Jupeter") {
        console.log("Hi, Jupeter");
      }
      console.log("Who are you?");

      if (name === "Team Jupeter") {
        console.log("Hi, Jupeter");
      }
      console.log("Who are you?");

      // Boolean Expression: return true or false value. 
      if (name === "Jupeter") {
        console.log("Hi, Jupeter");
      } else if (name === "Team Jupeter") {
        console.log("Hi, Team Jupeter");
      } else {
        console.log("Who are you?");
      }
      console.log("I am out of if block");
      */


      /* Ternary operator: 3 operands. ?
      let myNumber = 7;
      // Boolean Expression
      let message = (myNumber === 7)? "You are lucky": "You are still lucky" // Operator => ?, : , Operands => (myNumber === 7), "You are lucky", "You are still lucky".

      console.log(message); 
      */



      /* Logical Operators 
      &&(and) == 하나라도 false면, 전부 false, ||(or) == 하나만 true면, 전부 true, !(not) == 반대
      console.log(true && true);
      console.log(true && false);
      console.log(false && true);
      console.log(false && false);
      
      console.log(true || true);
      console.log(true || false);
      console.log(false || true);
      console.log(false || false);

      console.log(!false || false);
      console.log(!(false || false));
      console.log(!true || true);
      console.log(!(true || true));

      console.log(!false && false);
      console.log(!(false && false));
      console.log(!true && true);
      console.log(!(true && true));

      console.log(!true);
      console.log(!false);

      0, null, undefined == false, 1, 2, .... == true.

      &&로 연결되면, 최초의 False값을 return하거나, 혹은 false값 없으면 제일 마지막 값 return.
      console.log(1 && 2 && 3); // 3 
      console.log(0 && 2 && 3); // 0
      console.log(1 && 0 && null); // 0
      console.log(1 && 2 && undefined); // undefined

      ||은 최초의 true값을 return하거나, 없으면, 제일 마지막 false값을 return.
      console.log(1 || 2 || 3); // 1
      console.log(0 || 2 || 3); // 2
      console.log(1 || 0 || null); // 1 
      console.log(0 || null || undefined); // undefined 

      true == true, false == false
      false value === 0, null, undefined, true value === 그 외의 모든 데이터(숫자, 문자, ....)

      &&의 Priority가 ||보다 높다. 따라서 and 부터 먼저 하고 그 다음에 or을 하게 된다.
      console.log(1 || 2 && 3); // 1
      console.log(1 || 0 && 3 || 0); // 1
      console.log(undefined || 2 && 3 || null); // 3
      console.log(3 || 2 && 0); // 3
      console.log(undefined || 2 && 3 && null); // null
      */
      