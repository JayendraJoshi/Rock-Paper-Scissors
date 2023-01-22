//nodes

const scoreContainer=document.querySelector(".score-Container")
const playerScore=document.querySelector(".player-Score")
const playerScoreCount=document.querySelector(".player-Score-Count")
const computerScore=document.querySelector(".computer-Score")
const computerScoreCount=document.querySelector(".computer-Score-Count")
const messageContainer=document.querySelector(".message-Container");
const optionButtons=document.querySelectorAll(".option");
const restartContainer=document.querySelector(".restart-Container")
const restartBtn=document.querySelector(".restart");

messageContainer.textContent="FIGHT";
restartBtn.disabled=true;

//Gon Score
let cWon=0;
let cTied=0;
let cLost=0;

// Player Score
let pWon=0;
let pTied=0;
let pLost=0;

// counts rounds
let round=0;


function getGonChoice()
{
    const compInput = new Array("ROCK","PAPER","SCISSORS");
    const random = Math.floor(Math.random() * compInput.length);
    return compInput[random];
}

function playRound(playerSelecetion1,GonSelection)
{
    const outcome=["default","default"];

        playerSelecetion = playerSelecetion1.toUpperCase();


    if(playerSelecetion ==="ROCK" && GonSelection==="SCISSORS")
    {
        outcome[0]="Gon chooses SCISSORS, you win!", outcome[1]="win"
       
    }
    else if(playerSelecetion==="ROCK" && GonSelection==="ROCK")
    {
         outcome[0]="Gon chooses ROCK, it's a draw!", outcome[1]="draw"
       
    }
    else if(playerSelecetion==="ROCK" && GonSelection==="PAPER")
    {
        outcome[0]="Gon chooses PAPER, you lose!", outcome[1]="loss"
       
    }
    else if(playerSelecetion ==="PAPER" && GonSelection==="ROCK")
    {
         outcome[0]="Gon chooses ROCK, you win!", outcome[1]="win"
       
    }
    else if(playerSelecetion==="PAPER" && GonSelection==="PAPER")
    {
         outcome[0]="Gon chooses PAPER, it's a draw!",outcome[1]="draw"
       
    }
    else if(playerSelecetion==="PAPER" && GonSelection==="SCISSORS")
    {
        outcome[0]="Gon chooses SCISSORS, you lose!",outcome[1]="loss"
       
    }
    else if(playerSelecetion ==="SCISSORS" && GonSelection==="PAPER")
    {   outcome[0]="Gon chooses PAPER, you win!",outcome[1]="win"
       
    }
    else if(playerSelecetion==="SCISSORS" && GonSelection==="SCISSORS")
    {
        outcome[0]="Gon chooses SCISSORS, it's a draw!",outcome[1]="draw"
       
    }
    else if(playerSelecetion==="SCISSORS" && GonSelection==="ROCK")
    {
        outcome[0]="Gon chooses SCISSORS, you lose!",outcome[1]="loss"
       
    }

    return outcome;
}

optionButtons.forEach(occurance =>{
occurance.addEventListener("click",function(e){

for(round=1;pWon<5 && cWon<5;)
{
    console.log(round);
    showResult(addScore(playRound(occurance.id,getGonChoice())));
break;
}
if(pWon==5 || cWon==5){


    switch(pWon)
    {
        case 5:
            messageContainer.textContent=("You won the game!")
        break;
        default:
            messageContainer.textContent=("You lost the game!")
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
    messageContainer.textContent=(result[0])
    return [pWon,cWon]
}
function showResult(score)
{
playerScoreCount.textContent=(score[0] );
computerScoreCount.textContent=(score[1]);

}
function reset(){
    cWon=0;
    cTied=0;
    cLost=0;

    pWon=0;
    pTied=0;
    pLost=0;

   restartBtn.disabled=true;
    messageContainer.textContent="";
    playerScoreCount.textContent="";
    computerScoreCount.textContent="";
    messageContainer.textContent="FIGHT";
    return;
}

function enableRestartBtn(){
   restartBtn.disabled=false;
}

restartBtn.addEventListener('click',function(){

    reset();

})