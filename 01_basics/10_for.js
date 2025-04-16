// for of loop
const greetings = "Hello World"
for (const greet of greetings) {
    if (greet == " "){
        continue;
    }
    // console.log(`each char is ${greet}`);
    
}

const arr = [10,29,34,34,55,123]
for (const num of arr) {
    // console.log(num);
    
}

// Maps

const initialMap = new Map([
    ['name', 'Alice'],
    [1, 'number key'],
    [{ id: 1 }, 'object key']
  ]);
  
//   console.log(initialMap.size); // Output: 3

const map1 = new Map(
    [
        ['name', "Ksm"],
        ['id',"abc123"],
        ['location',"kahin durrrr",]

    ]
  )
//   console.log(map1);
//   console.log("after updation:");
  
  map1.set('followers',4876)
//   console.log(map1);
  map1.set('status',"Single")

//   console.log(map1);
//   console.log(`size of map1 is ${map1.size}, 
    // status is ${map1.get('status')}
    // is he from Earth ${map1.has("location")}
    // `);
  for (const [key,value] of map1) {  //destructuring
    // console.log(key,'-',value);
    
  }

  for (const keys of map1.keys()) {
    // console.log(keys);
    
  }
  for (const values of map1.values()) {
    // console.log(`VALUES IN mAP1 ARE ${values}`);
    
  }

  for (const entries of map1.entries()) {
    // console.log(`Entries as key,value : ${entries}`);
    
  }

//for in loop --> for looping in objects

const obj1 = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    py : "python",
}

for (const key in obj1) {
    // console.log(key);
    // console.log(`${key} is shortcut for ${obj1[key]}`);
    
}

// for each loop used generally in ARRAY
// call back function doesnot have name
const languages = ["js","ruby","python","cpp","java"]
languages.forEach( function (val){
    // console.log(`using foreach ${val}`);
    
})

languages.forEach( (item)=> {
    // console.log(`using arrow function foreach ${item}`);
    
})
//  for each can access item in array, it's index , whole array
languages.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
    
})

// using forEach() to acces array of objects 
// forEach() does not return any value

const myCoding = [
    
    {
        language : "javascript",
        extension : "js",
    },
    {
        language : "java",
        extension : "java",
    },
    {
        language : "pyhton",
        extension : "py",
    },
    {
        language : "c++",
        extension : "cpp",
    },
]

myCoding.forEach( (item)=>{
    console.log(item);
    console.log(item.extension);
       
})

