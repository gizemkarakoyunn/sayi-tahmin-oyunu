'use strict';

let secretNumber = Math.trunc(Math.random() * 20)+ 1;
let score = 20;
let highscore = 0;

var displayMessage = function(message)
{
    document.querySelector('.message').textContent = message;    
};

document.querySelector('.check').addEventListener('click',function(){

    var guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    console.log(secretNumber, typeof secretNumber);

//input boş girilirse

    if(!guess){
    displayMessage('Bir sayı giriniz!');
    }

//sayılar birbiriyle eşleşirse      

    else if(guess === secretNumber){
    displayMessage('Doğru tahmin');
    document.querySelector('.number').textContent=secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    }   

    if(score > highscore){
    highscore = score;

    document.querySelector('.hightscore').textContent = highscore;

}

//sayılar birbiryle eşleşmiyorsa

else if(guess !== secretNumber){
    if(score>1){
        displayMessage(guess>secretNumber ? ':Çok yüksek' : 'Çok düşük')
        document.querySelector('.score').textContent = score;
    }
    else{
        displayMessage('Oyunu kaybettin')
        document.querySelector('.score').textContent= 0;
        }
    }
    });


document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) +1;

    displayMessage('Tahmin ediliyor...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem';

}); 

