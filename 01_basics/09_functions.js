function sayMyName() {
    console.log("a");
    console.log("n");
    console.log("i");
}
sayMyName    // reference
sayMyName()  // function call done to execute the function

function addTwoNums(num1,num2) {
    // console.log(num1 + num2);
    return num1 + num2
}
const result = addTwoNums(5,9);
console.log("Result : ", result);    // undefined
// unless we write return (num1 + num2)

function loginUserMsg(username) {
    return `${username} just logged in`
}

loginUserMsg("ksm");   // nothing will be printed as we just called the function and function returned a value but we didnt print it

console.log(loginUserMsg("anamika"));
console.log(loginUserMsg("")); // just logged in
console.log(loginUserMsg());   //undefined just logged in

function calcCartPrice(val1, val2, ...num1) {
    return num1;  // ...num1 is rest operator here
}  

console.log(calcCartPrice(100,300,5999,299,600)); // [ 5999, 299, 600 ]

const user = {
    username: "Arnav",
    price : 199,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user);

handleObject({
    username: "avi",
    price: 3999,
})  //declaring object as argument in function call

const myNewArray = [300,600,500,200];

function returnSecondVal(getArr){
    return getArr[1];   // understand
}

console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([700,40,50,70,56]));

console.log(addOne(7));   // will execute correctly

function addOne(num){
    return num + 1;
}

addTwo(3)   //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}  // here addTwo is treated as an expression
                                                                                                                                                                                                                                                                                                    