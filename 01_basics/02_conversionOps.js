console.log("hello");
let score = 33;
let scoreStr = "33abc"


// console.log(typeof score);
// console.log(typeof scoreStr);

let valInNum = Number(scoreStr) //typecasting
// console.log(typeof valInNum); //number 
// console.log(valInNum); //NaN

// be careful of this lack of strict check 

let test = null
// console.log(typeof test);  // object
// console.log(test); //null
let testInNum = Number(test) 
// console.log(testInNum);  //0 , which is not the case 

 let abc;
// console.log(typeof abc); //undefined
// console.log(abc); //undefined

let test1 = 1
let checktest1 = Boolean(test1)
// console.log(checktest1); //true

let test2 = ""
let checktest2= Boolean(test2)
// console.log(checktest2); //false as empty string

let test3 = "mcn"
let checktest3 = Boolean(test3)
console.log(checktest3); //true 