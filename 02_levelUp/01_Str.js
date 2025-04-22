let browser = "Mozillafks;lfkiiiilllldjkfnb";
console.log(browser[-3]); // undefined
console.log(browser[5]);  // l
console.log(browser[browser.length -1]); //a

if(browser.includes("zil")){
    console.log("found");
}else console.log("lost");

console.log(browser.indexOf('v'));
console.log(browser.indexOf('l'));
let secondOccurence= browser.indexOf('l',browser.indexOf('l')+1)
console.log(secondOccurence);
console.log(browser.lastIndexOf('l'));

console.log(browser.slice(3,7)); //7th index is exclsive
console.log(browser.slice(3));
console.log(browser.toUpperCase());

let updated = browser.replace("Moz","van");
console.log(updated);