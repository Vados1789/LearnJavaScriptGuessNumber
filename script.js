'use strict';

let guessNumber =  Math.trunc(Math.random()*20) +1;
let score = Number(document.querySelector('.score').value = 20);
let highScore = 0
document.querySelector('.number').textContent = guessNumber;

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);
    if (guessNumber === guess){
        console.log('You win');
        document.querySelector('.number').textContent = String(guessNumber);
        document.querySelector('.message').textContent = "You win";
        document.querySelector('body').style.backgroundColor = 'green';
        if (Number(document.querySelector('.highscore').textContent) < score){
            document.querySelector('.highscore').textContent = score;
        }
    } else {
        score -- ;
        if (score > 0){
            if (guess > guessNumber){
                document.querySelector('.message').textContent = "Too big";
            } else {
                document.querySelector('.message').textContent = "Too low";
            }
            document.querySelector('.score').textContent = String(score);
            console.log('Try again', guessNumber);
        } else {
            document.querySelector('.message').textContent = 'You lose the game';
            document.querySelector('.score').textContent = '0';
            document.querySelector('body').style.backgroundColor = 'red';
        }

    }
});

document.querySelector('.check').addEventListener('Enter', function (){
    const guess = Number(document.querySelector('.guess').value);
    if (guessNumber === guess){
        console.log('You win');
        document.querySelector('.number').textContent = String(guessNumber);
        document.querySelector('.message').textContent = "You win";
        document.querySelector('body').style.backgroundColor = 'green';
        if (Number(document.querySelector('.highscore').textContent) < score){
            document.querySelector('.highscore').textContent = score;
        }
    } else {
        score -- ;
        if (score > 0){
            if (guess > guessNumber){
                document.querySelector('.message').textContent = "Too big";
            } else {
                document.querySelector('.message').textContent = "Too low";
            }
            document.querySelector('.score').textContent = String(score);
            console.log('Try again', guessNumber);
        } else {
            document.querySelector('.message').textContent = 'You lose the game';
            document.querySelector('.score').textContent = '0';
            document.querySelector('body').style.backgroundColor = 'red';
        }

    }
});
document.querySelector('.again').addEventListener('click', function (){
    guessNumber = Math.trunc(Math.random()*20);
    score = Number(document.querySelector('.score').value = 20);
    document.querySelector('.guess').value = null;
    document.querySelector('body').style.backgroundColor = '#222';
});
