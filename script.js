'use strict';

// //query selector lets you select classes with their given names by using .
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.number').textContent);

//event listener
let secret_number = Math.trunc(Math.random()* 20 +1);
let score = 20;
let highscore =0;
// document.querySelector('.number').textContent = secret_number;
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = "20";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor='#222';

    secret_number = Math.trunc(Math.random()* 20 +1);
})

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
//putting the functionality
    if(guess ==0){
        console.log("Error, Please input correct value");
        document.querySelector('.message').textContent = ' Please input correct number, this is a wrong input';
    }
    else{
        if(guess === secret_number ){
            document.querySelector('.message').textContent = `Guess is right!!`;
            //when player wins the game
        document.querySelector('body').style.backgroundColor='#60b347'; //always inside a string
        if(score >highscore){
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }
        }
        else if(guess > secret_number){
            //when the guess is too high
           if(score===0){
            document.querySelector('.message').textContent = `Sorry, you loose`;
           }
            if(score>0){
                document.querySelector('.message').textContent = `Guess is too high!!`;
                score--;
                document.querySelector('.score').textContent = `${score}`;
            }
            }
           
        else if(guess < secret_number){
            // when guess is too low
            if(score===0){
                document.querySelector('.message').textContent = `Sorry, you loose`;
               }
            if(score>0){
            document.querySelector('.message').textContent = `Guess too low!!`;
            score--;
            document.querySelector('.score').textContent = `${score}`;
            }
        }
    }
   
    
});

