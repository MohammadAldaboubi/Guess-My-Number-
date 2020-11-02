'use strict';
//Initializing all my variables
let userGuess, guessField,score, randomNumber,backGround, message, correctNumber,highScore, highPoint, scoreDOM, currentHighscore, previousHscore, headerDom, gamePlaying;

//set the game main variables and get the game going when we load the page
init();

//Whenever the user clicks the check button, it checks if the number submitted is the same as the correct hidden number. 
document.querySelector('.check').addEventListener('click', function() {
    if (gamePlaying){
    initalizeGuess();
    console.log(userGuess);
    console.log(gamePlaying);

    if(userGuess === randomNumber){
        backGround.background ='#60b347';
        message.textContent = 'Correct!'
        correctNumber = document.querySelector('.number').textContent = randomNumber;
        console.log('Previous High Score: ' + previousHscore);
        console.log('Current High Score ' + highScore);
        headerDom.textContent = 'You are Worthy as my opponent.';
        trackHighscore(score);
        checkHighScore();
        gamePause();
        console.log(gamePlaying)
    }
    else if(Math.abs((userGuess - randomNumber)) >= 10 ){
        message.textContent = 'You are too cold';
        backGround.background = '#3277dd';
        headerDom.textContent = 'You are not Worthy...';
        trackScore(3);
    }
    else if(Math.abs((userGuess - randomNumber)) <= 3 ){
        message.textContent = 'You are very close! Hot!';
        backGround.background = 'rgb(216, 13, 13)';
        headerDom.textContent = 'Close... but not close enough.'
        trackScore(1);
    }
    else if (userGuess < randomNumber || userGuess > randomNumber){
        message.textContent = 'too Low!';
        backGround.background= '#222';
        headerDom.textContent = 'Noob';
        trackScore(2)
    }
}});

//Whenever the player clicks the again button it resets the game, keeps track of maximum highscore.
document.querySelector('.again').addEventListener('click', function(){
    previousHscore = currentHighscore;
    init();
    initalizeGuess(); 
    guessField.value = "";
});

//tracks how many scores left for the player
let trackScore = function(point){
let scorePoint = document.querySelector('.score');
score -= point;

if (score <= 0){
    gamePause();
    headerDom.textContent=`Can't believe your noob ass lost this game`;
    message.textContent = 'No Comment....';
    backGround.background = "url('noob2.jpg') no-repeat center ";
}

return scorePoint.textContent = score;
};

//stores the current highscore of the current game
let trackHighscore = function(point){
    currentHighscore = point;
    return currentHighscore;
};

//We use this function to be able to get the number inserted by the user.
function initalizeGuess (){
    guessField = document.querySelector('.guess');
    userGuess = Number(guessField.value);
}

//check the current high score the player got this game and compare it with previous highscore game, if it's higher then submit it as new high score, if it's lower then we take the previous game highscore.
function checkHighScore(){
    console.log('Previous High Score: ' + previousHscore);
    console.log('Current High Score ' + highScore);

    if (currentHighscore > previousHscore){
        highScore = currentHighscore;
        return highPoint.textContent = highScore;
    }
    else if(previousHscore === undefined){
        return highPoint.textContent = currentHighscore;
    }
    else{
        highScore = previousHscore;
        return highPoint.textContent = highScore;
    }

};

//When the player wins the game we stop the player from interacting with the interface of the website
function gamePause(){
    gamePlaying = false; 
    return gamePlaying;
}

//Function to setup a fresh new game for the player.
function init(){
    message = document.querySelector('.message');
    backGround = document.body.style; 
    gamePlaying = true;
    score = 20;
    highPoint = document.querySelector('.highscore');
    headerDom = document.querySelector('header > h1');
    headerDom.textContent = 'Guess My Number!';
    document.querySelector('.score').textContent = score ;
    correctNumber = document.querySelector('.number').textContent = "?";

    backGround.background= '#222';
    randomNumber = Math.floor(Math.random() *20 + 1);
    console.log(randomNumber);
    //previousHscore = highScore;
};


//Game Completed by yours truly....Actually there is one more thing to implement.