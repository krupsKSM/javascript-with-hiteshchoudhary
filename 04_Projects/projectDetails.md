# Projects related to DOM

## click here
[click here](liveLink)

# Solution code

## Project 1 - Color theme Switcher

```javascript
console.log("Anamika")
const buttons =  document.querySelectorAll('.button')

const targetBody = document.querySelector('body')
console.log(buttons);  // returns a nodeList of button class

buttons.forEach(function (clickButton){
    console.log(clickButton);

    clickButton.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target); 

        if (event.target.id === 'grey'){
            targetBody.style.backgroundColor = event.target.id 
        }
        if (event.target.id === 'white'){
            targetBody.style.backgroundColor = event.target.id 
        }
        if (event.target.id === 'blue'){
            targetBody.style.backgroundColor = event.target.id 
        }
        if (event.target.id === 'red'){
            targetBody.style.backgroundColor = event.target.id 
        }
        if (event.target.id === 'green'){
            targetBody.style.backgroundColor = event.target.id 
        }
        
    })

})
```
## Project 2  BMI calculator

```javascript
const form =  document.querySelector('form')

form.addEventListener('submit', (action) => {
    action.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const username = document.querySelector('#username').value; 
    // Access the value of the username input
    const result = document.querySelector('#result');

    if(height ==='' || height < 0 || isNaN(height)){
        result.innerHTML = `Please provide a valid height ${height}`
    }else if(weight ==='' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please provide a valid weight ${weight}`
    }else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        // result.innerHTML = `<span>${bmi}</span>`;
        let bmiVal;
        if (bmi < 18.6) bmiVal = "UNDERWEIGHT";
        else if (bmi > 18.6 && bmi < 24.9) bmiVal = "HEALTHY";
        else bmiVal = "OVERWEIGHT";
        result.innerHTML = `<span>Hi ${username}, Your BMI is ${bmi} and you are ${bmiVal}.</span>` ;
    }

})

```

## Guess Num code file 
```javascript
// console.log(parseInt(Math.random()*100 +1)); 
let randomNumber = parseInt(Math.random()*100 +1);

const submit = document.getElementById('sbmt')
const userInput = document.getElementById('guessfield');


const guessSlot = document.querySelector('.guesses')
const remainingGuesses = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p');
let prevGuess = [];
let numOfGuess = 1 ; 

let playGame = true ; //checks the conditions that enables the user to play a game

if (playGame) {
    submit.addEventListener('click',function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if (isNaN(guess)) {
        alert('please enter a vaild number')
    }else if (guess < 1){
        alert('please enter number greater than 1')
    }else if (guess > 100){
        alert('please enter number less than 100')
    }else {
        prevGuess.push(guess);
        if (numOfGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess); // make sure to pass argument , else "undefined" error will come
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Correct guess`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`Your guess is toooo low`);
    }else if(guess > randomNumber){
        displayMessage(`Your guess is toooo high`);
    }
}

function displayGuess(guess) {
    userInput.value = '' ; //cleanup done
    guessSlot.innerHTML += `${guess}    `;
    numOfGuess++;
    remainingGuesses.innerHTML = `${11 - numOfGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {

    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame" style = "cursor: pointer">start new game</h2>`
    startOver.appendChild(p);
    playGame = false;

    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function (event) {
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = [];
        numOfGuess = 1;
        guessSlot.innerHTML = "";
        remainingGuesses.innerHTML = `${11 - numOfGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}

```