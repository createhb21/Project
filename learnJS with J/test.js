
// 1 
function say(time, phrase) { 
  console.log(`[${time}] ${this.name}: ${phrase}`);
}

let user = { name: "John" };  

let messageData = ['10:00', 'Hello']; 


say.call(user, messageData);

function say(time, phrase) {
  // console.log(arguments); 
  // console.log(arguments[0]); 
  // console.log(arguments[1]); 
  console.log(`[${time}] ${this.name}: ${phrase}`);
}

let user = { name: "John" };

let messageData = ['10:00', 'Hello'];

say.call(user, ...messageData); 
say.apply(user, messageData); 

// 2

let args = [1, 2, 3];  

func.call(context, ...args);
func.apply(context, args);   

// 3
function myArgs(...rest) {
  console.log(arguments); 
}

myArgs(1);  
myArgs(1, 2, 3); 


// 4
let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function(...rest) {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }
    // let result = func.call(this, ...rest); 
    // let result = func.apply(this, rest); 
    let result = func.apply(this, arguments);  

    // console.log(...rest); 
    // console.log(arguments); 

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

console.log( worker.slow(3, 5) ); // works // Called with 3, 5 ,   8 
console.log( "Again " + worker.slow(3, 5) ); // same (cached)  // Again 8  

