/*
01 - JS 코드를 실행하는 과정

문제 1 : console.log("출력되는 텍스트")를 사용하여 콘솔창에 Hello World를 출력하는 간단한 코드를 작성하세요.

문제 2 :Javascript 코드는 브라우저와 서버에서 사용될 수 있다/없다?

문제 3 : 각각의 웹브라우저, Chrome, Firefox, 는 자체 내장되어있는 엔진을 통해 Javascript 코드를 해석합니다.  이때 Firefox가 쓰는 엔진의 이름과 Chrome이 쓰는 엔진의 이름은 무엇인가요?
*/

/*
02 - 코드 에디터

문제 1 : IDE는 뭐의 약자일까요?

문제 2 : 우리가 사용하는 Stackblitz는 어떤 에디터를 웹에서 사용가능하게 만든건가요?
1. Webstorm
2. Visual studio code
3. Sublime Text

문제 3 : 구글에서 Developer console을 열려면 어떤 버튼을 눌러야하나요?
1. F12
2. F11
3. F5
*/

/* 03 - Hello World

여기서 Javascript 코드는 <script></script> 다음과같이 Script tag안에 작성된 코드들을 얘기합니다. 

문제 1: HTML문서 속에다 Script Tag를 주고 Javascript 코드를 작성하는 방식을 인라인 코드방식이라하고, 다른 파일에 지정해놓고 외부에서 Javascript 코드를 불러올때는 External Script 방식이라고 합니다. 

      1. 인라인 코드 방식으로 콘솔창에 I am Javascript가 출력되는             코드를 작성하세요.
      2. 인라인 코드 방식으로 alert() 함수를 사용해 페이지에서                Hello World 메시지 알림 팝업이 뜨는 코드를 작성하세요
      3. External script 방식으로 I am from index.js 가 출력되는            코드를 작성하세요
      4. External script 방식으로 alert() 함수를 사용해 페이지에서            Hello World 메시지 알림 팝업이 뜨는 코드를 작성하세요
      */


      /*
04 - Evaluation, Expression, Statement

Javascript 코드 뒤에는 종종 ; 쌍반점(semi-colon)을 볼 수 있는데, 이것은 Statement들을 구분짓고 암시적으로 이 Statement가 끝났다라는 뜻으로 사용됩니다. 

문제 1 : 다음의 문제들을 알맞은 정답과 매칭하세요.
1. 프로그래밍에서 코드란 무엇인가요?
2. 프로그래밍에서 Statement이란 무엇인가요?
3. 프로그래밍에서 Expression이란 무엇인가요? 
4. 프로그래밍에서 Evaluation이란 무엇인가요?

a. 컴퓨터에게 어떠한 값을 가져오라는 명령
b. 컴퓨터가 읽을 수 있는 언어
c. 컴퓨터가 코드를 읽고 계산을해서 내는 결과값
d. 컴퓨터에게 무엇을 하라고 내리는 명령


문제 2 : 
let math = 2 + 3;
console.log(math);

다음은 5를 출력하는 간단한 코드입니다. 여기서 어떤것이 Statement, Expression 그리고 Evaluation인지 생각해보세요.
*/

/*
05 - use strict, 쉬어 가는 페이지

문제 1 : 웹브라우저는 자체 내장된 엔진을 사용해 Javascript 코드를 읽고 실행을하는데, Javascript의 버젼이 다양하다보니, Javascript의 옛날문법을 이해 못할 수 있습니다. 
이 때 개발자들은 use strict라는 표현을 사용합니다.

use strict란?
예전문법을 무시하고 최신 Javascript문법에 따라 우리가 쓰는 코드를 읽고 해석을 하라는 의미입니다
*/


/*
06 - variables
vary(변한다) + able(할 수 있다) 

변수란 "어떤 관계나 범위 안에서 여러 가지 값으로 변할 수 있는 수"를 말합니다.

Javascript내에서 변수를 생성할려면, 먼저 변수를 선언(declaration)해줘야합니다.
let food;

이 food라는 변수를 파일내에 선언함으로써, 이 food 변수는 파일내에 존재하게됩니다. 우리는 이 food라는 변수를 사용 할 수 있고, 값을 할당할 수 있습니다.

변수에 값을 담을때 우리는 이것을 초기화(Initialization)라고 부릅니다.
let food = "pizza";

더 쉬운 예제를 들자면, 
let box = "something" 은 값을 담는 상자를 파일내에 존재한다고 선언하고, 상자안을 우리가 원하는 값(something)으로 초기화합니다.
변수에 값을 게속해서 재할당 할 수 있습니다.
box = "toy";
box = "food";



변수에 할당되는 값이 문자일 경우  " "나 ' '로 묶어줘야합니다.

Javascript내에서 변수를 선언할때 사용되는 키워드는 let, var, const등 이 있고, 각각의 다른 용도를 가지고있습니다. 

문제 1 : let 키워드를 사용해 juice라는 변수를 선언하고, juice 변수에 apple juice라는 값을 할당하세요. 그리고 console.log()를 이용해 juice변수를 출력하세요.
*/


/*
06 - Variables - let과 const

Javascript내에서 변수를 생성할려면, 먼저 변수를 선언(declaration)해줘야합니다.
let food;

이 food라는 변수를 파일내에 선언함으로써, 이 food 변수는 파일내에 존재하게됩니다. 우리는 이 food라는 변수를 사용 할 수 있고, 값을 할당할 수 있습니다.

변수에 값을 담을때 우리는 이것을 초기화(Initialization)라고 부릅니다.
let food = "pizza";

더 쉬운 예제를 들자면, 
let box = "something" 은 값을 담는 상자를 파일내에 존재한다고 선언하고, 상자안을 우리가 원하는 값(something)으로 초기화합니다.
변수에 값을 게속해서 재할당 할 수 있습니다.
box = "toy";
box = "food";

const는 constant(일정한)의 약자입니다. 변수앞에 const라는 키워드롤 추가하면 그 변수의 값을 일정한 상태를 유지하고 바꿀수 없게 됩니다.

const time = "Time can`t be changed";
time = "Time can be changed" 에러 발생
여기서 time이란 변수를 초기화하고, 다시 다른 값을 재 할당하려고하면 에러를 return 합니다.


  

문제 1 : 지금까지 배운 선언과 초기화 개념을통해, iceCream이라는 주어진 변수의 값을 출력해보세요. 출력되는 값은 
choco
vanilla
이여야 합니다

문제 2 : const 키워드를 이용해 변수를 선언 및 초기화해보세요.
*/

// 문제 1
let iceCream; // 선언(Declaration)
// iceCream = " " // 초기화(Initialization)
// console.log() // 출력


// 문제 2