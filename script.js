'use strict';

let guessNumber = Number(document.querySelector('.number').value = Math.trunc(Math.random()*20));
let score = Number(document.querySelector('.score').value = 20);
let highScore = Number(document.querySelector('.highscore').value = 0);

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    if (guessNumber === guess){
        console.log('You win');
        document.querySelector('.number').textContent = String(guessNumber);
        document.querySelector('.message').textContent = "You win";
    } else {
        score -- ;
        highScore ++;
        if (Number(document.querySelector('.guess').value) > guessNumber){
            document.querySelector('.message').textContent = "Too big";
        } else {
            document.querySelector('.message').textContent = "Too low";
        }
        document.querySelector('.score').textContent = String(score);
        document.querySelector('.highscore').textContent = String(highScore);
        console.log('Try again', guessNumber);
    }
});
document.querySelector('.again').addEventListener('click', function (){
    guessNumber = Number(document.querySelector('.number').value = Math.trunc(Math.random()*20));
    score = Number(document.querySelector('.score').value = 20);
    highScore = Number(document.querySelector('.highscore').value = 0);
    document.querySelector('.guess').value = null;
});