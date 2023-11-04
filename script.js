'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector('.score').textContent=13;
// document.querySelector('.number').textContent=23;

// document.querySelector('.guess').value=20

let secretNumber = Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click', function() {
   const guess= Number( document.querySelector('.guess').value)
   console.log(guess);

   if(!guess){
    document.querySelector('.message').textContent="⛔ No Number"
   } else if(guess === secretNumber){
     document.querySelector('.message').textContent="🥳 Correct Number"
     document.querySelector('.number').textContent=secretNumber;
     document.querySelector("body").style.backgroundColor="#60b347"
     document.querySelector('.number').style.width = "30rem"
     if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore
     }else{
        document.querySelector('.highscore').textContent=highScore
     }
   } else if(guess!==secretNumber){

    if(score>1){
        document.querySelector('.message').textContent= guess > secretNumber ? "📈 Too high!" : "📉 Too low";
        score--;
        document.querySelector('.score').textContent=score;
     }else{
        document.querySelector('.message').textContent="💥 You lost the game!";
        document.querySelector('.score').textContent=0;
     }
     document.querySelector('.highscore').textContent=highScore
   }
})
//reseting game
document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.message').textContent="Start guessing..."
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector("body").style.backgroundColor="#222"
    document.querySelector('.number').textContent="?"
    document.querySelector('.number').style.width = "15rem"
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.highscore').textContent=highScore
})
