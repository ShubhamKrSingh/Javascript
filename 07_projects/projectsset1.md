# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project One

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
    })
} )

```

## Project Two

```javascript

const from = document.querySelector('form')
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

from.addEventListener('submit', function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else {
        const bmi = (weight/((height * height)/10000)).toFixed(2)
        // how the result
        if(bmi < 18.6){
            results.innerHTML = `<span>You are under weight , BMI: ${bmi}</span>`
        }else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span>Your weight is normal , BMI: ${bmi}</span>`
        }else {
            results.innerHTML = `<span>You are over weight , BMI: ${bmi}</span>`
        }
    }

})

```

## Project Three

```javascript

const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
},1000)

```

## Project Four

```javascript

let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playgame = true;

if(playgame){
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // 
    if(isNaN(guess)){
        alert("Please enter a valid number!")
    }else if(guess < 1){
        alert("Please enter a valid number more than one")
    }else if(guess > 100){
        alert("Please enter a valid number smaller than hundred")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    // 
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is Too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is Too High`)
    }
}

function displayGuess(guess) {
    // 
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    // 
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame() {
    // 
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGAme'> Start new Game </h2>`
    startOver.appendChild(p)
    playgame = false
    newGame()
}

function newGame() {
    // 
    const newGameButton = document.querySelector('#newGAme')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame = true
    })
}

```