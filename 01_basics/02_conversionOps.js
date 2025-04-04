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
// console.log(checktest3); //true 

// ***********Operations************

// console.log("1" + 2); //12
// console.log(1 + 2 + "2"); // 32
// console.log(1 + "3"+ "2"); // 132
// console.log( 2*8 + "3" +2);// 1632
// console.log( "2" /8+ "3" +2)

//once string is encountered then entire expression is treated as string 

// console.log(true); //true
// console.log(+true); //1
// console.log(false); //false
// console.log(+false); // 0

let x= 2
console.log(x); // 2
console.log(x++); // 2 postfix
console.log(x); // 3 now incremented
let y = 4
console.log(++y); // 5 prefix





