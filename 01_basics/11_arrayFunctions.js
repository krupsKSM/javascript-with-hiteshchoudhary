// filter --> returns a val
const myNums = [10,20,30,24,45,67,89];
const newNums = myNums.filter((num)=> num > 40)
console.log(newNums);

const books = [
    {
        title : "Book 1", genre : "Fiction", publish : 1981 , edition: 2004,
    },
    {
        title : "Book 10", genre : "Non-Fiction", publish : 1992 , edition: 2008,
    },
    {
        title : "Book 2", genre : "History", publish : 1999 , edition: 2007,
    },
    {
        title : "Book 3", genre : "Non-Fiction", publish : 1989 , edition: 2010,
    },
    {
        title : "Book 4", genre : "Science", publish : 2009 , edition: 2014,
    },
    {
        title : "Book 5", genre : "History", publish : 1987 , edition: 2010,
    },
    {
        title : "Book 6", genre : "Science", publish : 1986 , edition: 1996,
    },
    {
        title : "Book 7", genre : "Non-Fiction", publish : 2011 , edition: 2004,
    },
    {
        title : "Book 8", genre : "Science", publish : 2001 , edition: 2004,
    },
    {
        title : "Book 9", genre : "History", publish : 1991 , edition: 2004,
    },
]

let userBooks = books.filter( (bok)=>bok.genre==="History");
console.log(userBooks);

userBooks = books.filter((bok)=>bok.publish >=2000);
console.log("heyyyy", userBooks);

console.log(`Books published after 2000 are ${userBooks.map((bok)=>bok.title)}`);