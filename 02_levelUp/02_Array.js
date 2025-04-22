const cities = ["Manchester", "Liverpool","Delhi","Mumbai","Kolkata","Guwahati","Jaipur"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
cities.unshift("Edinburgh");
console.log(cities);
console.log(cities.pop());
console.log(cities.shift());
console.log(cities);
console.log(cities.splice(2,3,"bbi","ccu"));
console.log(cities);

for (const city of cities) {
    console.log(city);
}

const triple = (number)=> number *3;
let nums = [34,65,23,67,87]
const tripled = nums.map(triple);
console.log(tripled);
console.log(nums.map((nums)=>nums*4));

const users = [
    {Name : "ani",id : 123,age : 28,},
    {Name : "Mani",id : 223,age : 18,},
    {Name : "Sani",id : 323,age : 38,},
    {Name : "Tani",id : 423,age : 48,},
]
console.log(users.map(user=>user.Name));

const adults = users.filter(user => user.age > 28)
console.log(adults);

console.log(tripled.filter(n=>n>108));

const cityData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const city = cityData.split(",");
console.log(city);
console.log(city.join("-"));

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString());
console.log(dogNames.join('+1 '));