var randomNumber = Math.floor(Math.random()*100)+1;
// console.log(randomNumber)

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess(){
    var userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent +=userGuess + ' ';
    lastResult.style.color = 'white';
    lastResult.style.padding = '10px';

    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if(guessCount === 2){
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }else{
        lastResult.textContent = 'Your assumption is Wrong!';
        lastResult.style.backgroundColor = 'red';

        if(userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess is too high';
        }else{
            lowOrHi.textContent = 'Last guess is too low';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();

}
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    guessField.focus();
    resetButton.textContent = 'Start a new game';
    document.body.appendChild(resetButton)
    resetButton.addEventListener('click', resetGame)
}

function resetGame(){
    guessCount = 1;
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

   
    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}