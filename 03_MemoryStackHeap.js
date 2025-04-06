let n1 = "ayush";
let n2 = n1;      //n2 gets a copy data stored in n1's memory i.e ayush
console.log(n2);
n2 = "umraan";
console.log(n2);
n1 = "janam"
console.log(n2);
console.log(n1);
// changes done in copy, original remains unchanged  , uses STACK memory for all primitive data types

// Non-Primitive data types like Array, Objects, Object function use HEAP memory, thus these variables store the address of the heap location in stack . any change to data in the heap location is reflected in al variables who point to the same location

let u1 = {
    email: "abc@abc.com",
    upi: "abc@ybl",
}

let u2 = u1; // u2 now points to the memory location where u1's data is stored i.e u2 copies the addres of u1 and stores it in stack memory.

u2.upi = "xyz@apl"

console.log(u1);  //{ email: 'abc@abc.com', upi: 'xyz@apl' }

u1.email = "xyz@qwe.com"
console.log(u2);  //{ email: 'xyz@qwe.com', upi: 'xyz@apl' }
console.log(u1);  //{ email: 'xyz@qwe.com', upi: 'xyz@apl' }






 