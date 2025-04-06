let str = "javascript"
console.log(str.length); // length of string - 10
console.log(str.charAt(7)); //i
console.log(str.charCodeAt(7)); //unicode of i - 105
let str1 = "Hello";
let str2 = " World";
let result1 = str1.concat(" to this",str2);
console.log(result1); // Output: "Hello to this World"

let str3 = "Hello World guys"; 
console.log(str3.endsWith("World")); // Output: false
console.log(str3.endsWith("Hello", 5)); //output: true
console.log(str3.includes("World", 5)); // true
console.log(str3.indexOf("or")); //7

let result2 = str3.replace("World", "JavaScript");
console.log(result2); // Output: "Hello JavaScript guys"
console.log(str3.slice(1,7)); //ello W
console.log(str3.slice(7)); // orld guys
console.log(typeof str3);   //string

const str4 = new String("A String object");
console.log(typeof str4); // object
let str5 = "   fkbhfjjfh       kfbdkfjf       fefjf"
console.log(str5.trim());







