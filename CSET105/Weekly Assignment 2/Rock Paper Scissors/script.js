var rpsDatabase = 
{
    'Rock': 
    {
        'scissors' : 1,
        'rock': 0.5,
        'paper': 0
    },

    'Paper': 
    {
        'rock' : 1,
        'paper': 0.5,
        'scissors': 0
    }, 

    'Scissors':
    {
        'paper' : 1,
        'scissors': 0.5,
        'rock': 0
    }
};

var scores =
{
    user: 0,
    computer: 0,
    roundCount: 1,
    increaseUserScore: function(){
        this.user++
    },
    increaseComputerScore: function(){
        this.computer++
    },
    increaseRoundCount: function(){
        this.roundCount++
    }
}

var computerMoves = ['rock', 'paper', 'scissors'];
var computerMove, userMove, computerButtons, clickedButton, userWin;

function setup()
{
    computerButtons = document.querySelectorAll("#computer button")

    //disable computer buttons
    for(const btn of computerButtons)
        btn.disabled = true;
   

}
function disableUserButtons(){
    let userButtons = document.querySelectorAll("#user button")
    for(const btn of userButtons)
        btn.disabled = true;

}
function enableUserButtons(){
    clickedButton.classList.remove("selected")
    let userButtons = document.querySelectorAll("#user button")
    for(const btn of userButtons)
        btn.disabled = false;
}

function setComputerMove()
{
    computerMove = Math.floor(3 * Math.random());
    let btn = document.getElementById(computerMove + "")
    btn.classList.add("selected")
}

function resetComputerButtons(){
    let btn = document.getElementById(computerMove + "")
    btn.classList.remove("selected")

}

function setUserMove(btn)
{
    clickedButton = btn;
    userMove = btn.innerHTML;
    btn.classList.add("selected")
    disableUserButtons()
    setComputerMove()
    checkWin()
    updateScoreBoard()
    setTimeout(enableUserButtons, 500)
    setTimeout(resetComputerButtons, 500)
}
function updateScoreBoard(){
    let userPara = document.getElementsByTagName('p')[0];
    userPara.innerHTML = "You - " + scores.user
    let computerPara = document.getElementsByTagName('p')[1]
    computerPara.innerHTML = "Computer - " + scores.computer    
}
function updateComments(value){
    let textarea = document.getElementById("comment")
    let text = "Round: " + scores.roundCount + "\nYou - " + userMove + "\nComputer - " + computerMoves[computerMove]
    
    textarea.value += text;
    //user wins
    if(value == 1)
        textarea.value += "\nYou win!\n\n"
    //tie
    else if(value == 0.5)
        textarea.value += "\nYou tie!\n\n"
    //user loses
    else
        textarea.value += "\nYou Lose!\n\n"

    textarea.value += "-------------------------------";

    scores.increaseRoundCount()
    
    //automatically scroll down when textarea filled
    textarea.scrollTop = textarea.scrollHeight
}
function checkWin(){
    let value = rpsDatabase[userMove][computerMoves[computerMove]]

    //user wins
    if(value == 1){
        scores.increaseUserScore()
        updateComments(value)
    }
    //tie
    else if(value == 0.5)
        updateComments(value)
    //user loses
    else{
        scores.increaseComputerScore()
        updateComments(value)
    }
}