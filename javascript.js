//nodes
const resultDiv=document.querySelector(".result");
const playerScore=document.querySelector(".player-Score")
const computerScore=document.querySelector(".computer-Score")
const scoreContainer=document.querySelector(".score-Container")
const optionButtons=document.querySelectorAll(".option");
const restartBtn=document.querySelector(".restart");

//Computer Score
let cWon=0;
let cTied=0;
let cLost=0;

// Player Score
let pWon=0;
let pTied=0;
let pLost=0;

// counts rounds
let round=0;


playerScore.textContent=("Your score: ");
computerScore.textContent=("Computer score:");

function getComputerChoice()
{
    const compInput = new Array("ROCK","PAPER","SCISSOR");
    const random = Math.floor(Math.random() * compInput.length);
    return compInput[random];
}

function playRound(playerSelecetion1,computerSelection)
{
    const outcome=["default","default"];

        playerSelecetion = playerSelecetion1.toUpperCase();


    if(playerSelecetion ==="ROCK" && computerSelection==="SCISSOR")
    {
        outcome[0]="Computer chooses SCISSOR, you win!", outcome[1]="win"
       
    }
    else if(playerSelecetion==="ROCK" && computerSelection==="ROCK")
    {
         outcome[0]="Computer chooses ROCK, it's a draw!", outcome[1]="draw"
       
    }
    else if(playerSelecetion==="ROCK" && computerSelection==="PAPER")
    {
        outcome[0]="Computer chooses PAPER, you lose!", outcome[1]="loss"
       
    }
    else if(playerSelecetion ==="PAPER" && computerSelection==="ROCK")
    {
         outcome[0]="Computer chooses ROCK, you win!", outcome[1]="win"
       
    }
    else if(playerSelecetion==="PAPER" && computerSelection==="PAPER")
    {
         outcome[0]="Computer chooses PAPER, it's a draw!",outcome[1]="draw"
       
    }
    else if(playerSelecetion==="PAPER" && computerSelection==="SCISSOR")
    {
        outcome[0]="Computer chooses SCISSOR, you lose!",outcome[1]="loss"
       
    }
    else if(playerSelecetion ==="SCISSOR" && computerSelection==="PAPER")
    {   outcome[0]="Computer chooses PAPER, you win!",outcome[1]="win"
       
    }
    else if(playerSelecetion==="SCISSOR" && computerSelection==="SCISSOR")
    {
        outcome[0]="Computer chooses SCISSOR, it's a draw!",outcome[1]="draw"
       
    }
    else if(playerSelecetion==="SCISSOR" && computerSelection==="ROCK")
    {
        outcome[0]="Computer chooses SCISSOR, you lose!",outcome[1]="loss"
       
    }

    return outcome;
}

optionButtons.forEach(occurance =>{
occurance.addEventListener("click",function(e){

for(round=1;pWon<5 && cWon<5;)
{
    console.log(round);
    showResult(addScore(playRound(occurance.id,getComputerChoice())));
break;
}
if(pWon==5 || cWon==5){


    switch(pWon)
    {
        case 5:
            scoreContainer.textContent=("You won the game!")
        break;
        default:
            scoreContainer.textContent=("You lost the game!")
        break;
    }
    enableRestartBtn();
}

round++;
})
})

function addScore(result)
{
    if(result[1]=="win")pWon++, cLost++;
    else if(result[1]=="draw") pTied++,cTied++;
    else if(result[1]=="loss") pLost++,cWon++;
    resultDiv.textContent=(result[0])
    return [pWon,cWon]
}
function showResult(score)
{
playerScore.textContent=("Your score: " + score[0] );
computerScore.textContent=("Computer score: " + score[1]);

}
function reset(){
    cWon=0;
    cTied=0;
    cLost=0;

    pWon=0;
    pTied=0;
    pLost=0;

    scoreContainer.textContent="";
    scoreContainer.appendChild(playerScore)
    scoreContainer.appendChild(computerScore)
    playerScore.textContent=("Your score: ");
    computerScore.textContent=("Computer score: ");
    resultDiv.textContent=("")
    return;
}

function enableRestartBtn(){
   restartBtn.disabled=false;
}

restartBtn.addEventListener('click',function(){

    reset();

})