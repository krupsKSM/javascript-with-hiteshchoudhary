// Object.create() <-- singleton
// Object literals

const mySym = Symbol("key1");
console.log(typeof mySym); //Symbol
console.log(mySym); // Symbol(key1)

// const mySym2 = Symbol("key2");
// console.log(typeof mySym2);

const JSuser1 ={
    name: "ani" , //by default key processed as "name"
    age:18,
    email: "xyz@abc.com",
    "nick": "mj",
    lastLogin: ["Mon","Wed"],
    mySym2 : "abc2",
    [mySym]: "myKey1", //***declaration syntax of symbol as key in object 
};

console.log(JSuser1.nick);
console.log(JSuser1["email"]);
// Declare a symbol, take it as key in an object and print it
 console.log(typeof JSuser1[mySym]); //myKey1
console.log(JSuser1.mySym2); //abc2
console.log(typeof JSuser1.mySym2);

JSuser1.email = "ghwd@nkfb.com"
console.log(JSuser1);
// if we dont want to allow any changes on this object
Object.freeze(JSuser1);
JSuser1.nick = "gfvd"
console.log(JSuser1.nick); // change not reflected

let JSuser2 ={
   name : "lalit",
};
JSuser2.greeting = function(){
    console.log(`Hello ${this.name}`);
    
}
console.log(JSuser2.greeting);// [Function (anonymous)]
console.log(JSuser2.greeting()); //Helloooooo

// singleton concept
const tinderUser = new Object(); //singleton object
const tinder ={}; //non-singleton object
tinderUser.username = "asghdv bkjdb";
tinderUser.id = "hj123";
tinderUser.address = {
    state : ["Del","Od","Nl","Ap","kn"],
    city: {
        pin : 6378248,
        sector:{
            lane : "1st street",
        }
    }
}
console.log(tinderUser);
console.log(tinderUser.address.city.sector.lane);

const obj1 = { 1:"a" , 2:"b"};
const obj2 = { 4:"d" , 5:"e" , 7:"g"};

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

// or use spread operator
const obj4 = {...obj1 , ...obj3} 
console.log(obj4);
console.log(Object.keys(obj4)); //returns an array of keys
console.log(123 in Object.keys(obj4)); //false , useful in database management as in backend services
console.log(obj2.hasOwnProperty('loggeIn')); //false

// object dedstructuring
const course = {
    coursename : "js by Hitesh",
    price : 999,
    courseLanguage: "hindi",
}
const {courseLanguage} = course //instead of course.courseLanguage, now we can directly use 

console.log(courseLanguage); //hindi

const {coursename : cn} = course; //aliasing
console.log(cn);







