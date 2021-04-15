
/* Rest == 여럿을 하나로 전환
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
