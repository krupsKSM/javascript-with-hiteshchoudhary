// Immediately Invoked Function Expressions (IIFE)
// To avoid pollution from Global scope .And we want to execute it immediately.
// place within parenthesis to protect from pollution of glaobal scope

(function chai(){    
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // using ; is mandatory in IIFE to let compiler know that here this IIFE ends, i.e where to stop the context

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');   // passing argument