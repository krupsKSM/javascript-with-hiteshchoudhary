const myNumbers = [10,30,23,45,65,74,12];

const newNumbers = myNumbers
                    .map((num) => num*2)
                    .map((num) => num-5)
                    .filter((num) => num>45);

// console.log(newNumbers);

// reduce method
const myTotal = myNumbers.reduce( (acc,currVal) => 
    {
        console.log(`acc : ${acc} and currVal : ${currVal}`);
        return acc + currVal;
    },12)    // 12 is the initial val that acc holds, acc= accumulator

console.log(`Total cost is ${myTotal}`);

