const user = {
    username : "anamika",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, kem cho viduuu`);
        console.log(this);
        
    }
}
user.welcomeMessage();
user.username = "ani";  //editing current context , so this will refer username as ani
user.welcomeMessage();

console.log(this); //{} i.e empty object as now we are in node environment and there is no global object

// but if we execute this 
// console.log(this); in browser in inspect element we will get window object as the Global Object in Browser is Window object

function chai(){
    let username1 = "abc";
    console.log(this);
    console.log(this.username1);   //undefined as this context works in object and not in functions
    
}
chai();

const tea = function (){
    console.log("inside tea function");
    let username = "sammy";
    console.log(this.username);
    
}
tea();

// ----------------ARROW function------------------
() => {}  

const tea_arrow = () =>{
    console.log(this);     // {} empty object
    let username = "love";
    console.log(this.username);   // undefined
    
    console.log("inside tea_arrow");
    
}
tea_arrow();




// if wrapped in Curly braces {} then return keyword is necessary

const addNum = (n1,n2) => { 
    return n1 + n2;      //explicit return 
}

const mulNum = (n1,n2) => (n1*n2) ;  // implicit return

console.log(addNum(7,9));
console.log( mulNum(7,15));

