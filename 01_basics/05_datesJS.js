let myDate = new Date(); // object
console.log(typeof myDate);

console.log(myDate); // time in milliseconds counted from midnight jan 1 1970 
console.log(myDate.toString()); //Mon Apr 07 2025 04:33:33 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Mon Apr 07 2025
console.log(myDate.toISOString()); //2025-04-07T04:37:13.884Z
console.log(myDate.toJSON()); //2025-04-07T04:37:13.884Z
console.log(myDate.toLocaleDateString()); //4/7/2025
console.log(myDate.toLocaleTimeString()); //4:37:13 AM
console.log(myDate.toLocaleString()); //4/7/2025, 4:46:51 AM
console.log(myDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })); //4/7/2025, 10:21:08 AM
let newDate1 = new Date (2013,0,26)
console.log(newDate1.toDateString()); //Sat Jan 26 2013 , jan = 0, Dec =11
let newDate2 = new Date ("2018-05-13")
console.log(newDate2.toDateString()); //Sun May 13 2018
let newDate3 = new Date ("03-04-2023")
console.log(newDate3.toDateString()); // Sat Mar 04 2023

// Timestamps --> used in pools, Quizzes
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); // time in secs

