const userChoiceEl = document.getElementById('user-choice');
const compChoiceEl = document.getElementById('comp-choice');
const contentEl = document.querySelector('.content');
const resultContainer = document.querySelector('.result-container');
const resultEl = document.getElementById('result');
const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');
const resetBtn = document.getElementById('reset-btn');


//create resetting function
//on game start - user score 0 , comp score 0
//on every click of a user btn -> generate a random comp choice
//compare user's with comp choice (3x3)
        //--> draw
        //--> user won ---increase user score by 1 and decrease comp score by 1
        //--> vice versa
//anyone's score crosses 10 -- game over


const weapons =["rock","paper","scissors"];
let result = '';
let userScore;
let compScore;

//functions

//default settings
function init(){
    userScore = 0;
    compScore = 0;
    userScoreEl.innerText = `${userScore}`;
    compScoreEl.innerText = `${compScore}`;
    resetBtn.style.display = 'none';
    resultContainer.style.display = 'none';
    contentEl.style.display = 'inline';
}

function generateRandomNumber(n) {
    return Math.trunc(Math.random() * n);
}

// match results
function compareChoice(userChoice,compChoice){
    
    if(userChoice === compChoice){
        result = 'GAME DRAW';
        resultEl.innerHTML = '<span style="color:#b6cdbd;font-size:2.5rem; font-weight: 900;"> DRAW</span>';
    }else if(userChoice === 'rock'){
        if(compChoice === 'paper'){
            result = 'USER LOST';
            resultEl.innerHTML = '<span style="color:#c50000;font-size:2.5rem; font-weight: 900;">USER LOST</span>';
        }else{
            result = 'USER WON';
            resultEl.innerHTML = '<span style=" font-size:2.5rem; font-weight: 900;">USER WON</span>';
        }
    }else if(userChoice === 'paper'){
        if(compChoice === 'scissors'){
            result = 'USER LOST';
            resultEl.innerHTML = '<span style="color:#c50000;font-size:2.5rem; font-weight: 900;">USER LOST</span>';
        }else{
            result = 'USER WON';
            resultEl.innerHTML = '<span style=" font-size:2.5rem; font-weight: 900;">USER WON</span>';
        }
    }else if(userChoice === 'scissors'){
        if(compChoice === 'rock'){
            result = 'USER LOST';
            resultEl.innerHTML = '<span style="color:#c50000;font-size:2.5rem; font-weight: 900;">USER LOST</span>';
        }else{
            result = 'USER WON';
            resultEl.innerHTML = '<span style=" font-size:2.5rem; font-weight: 900;">USER WON</span>';
        }
    }
    return result;
}

//score results
function displayResult(result){
    if(result === 'USER WON'){
        userScore++;
        // compScore--;
        userScoreEl.innerText = `${userScore}`;
        compScoreEl.innerText = `${compScore}`;
    }else if(result === 'USER LOST'){
        compScore++;
        userScoreEl.innerText = `${userScore}`;
        compScoreEl.innerText = `${compScore}`;
    }
}

function check(weapon){
    if(userScore ===10 || compScore ===10){
        resetBtn.style.display = 'inline';
    }else{
        resultContainer.style.display='inline';
        contentEl.style.display = 'none';
        const userChoice = weapon;
        const compChoice = weapons[generateRandomNumber(weapons.length)];

    // userChoiceEl.innerText = (`User chose : ${(userChoice)}`);
    // compChoiceEl.innerText = (`Computer chose : ${(compChoice)}`);
    userChoiceEl.innerHTML = `User chose : <span style="color: #c5cbda; padding:5px; font-weight: 900;">${userChoice}</span>`;
    compChoiceEl.innerHTML = `Comp chose : <span style="color: #c5cbda; font-weight: 900; ">${compChoice}</span>`;
    
    displayResult(compareChoice(userChoice , compChoice));
    }
}
//resetting events
resetBtn.addEventListener('click', init);

init();

