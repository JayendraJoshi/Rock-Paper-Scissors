const resultDiv=document.querySelector(".Result");
const playerScore=document.querySelector(".Playerscore")
const computerScore=document.querySelector(".Computerscore")

    //Computer Score
    let cWon=0;
    let cTied=0;
    let cLost=0;

     // Player Score
    let pWon=0;
    let pTied=0;
    let pLost=0;

playerScore.textContent=("You: Won: " + pWon );
computerScore.textContent=("The Computer: Won: " + cWon );

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
        outcome[0]="Computer chooses PAPER, you lose!", outcome[1]="lose"
       
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
        outcome[0]="Computer chooses SCISSOR, you lose!",outcome[1]="lose"
       
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
        outcome[0]="Computer chooses SCISSOR, you lose!",outcome[1]="lose"
       
    }

    return outcome;
}

const buttons=document.querySelectorAll("button");

buttons.forEach(occurance =>{
occurance.addEventListener("click",function(e){

 result=playRound(occurance.className,getComputerChoice())

    if(result[1]=="win")pWon++, cLost++;
    else if(result[1]=="draw") pTied++,cTied++;
    else if(result[1]=="lose") pLost++,cWon++;
    
playerScore.textContent=("You: Won: " + pWon );
computerScore.textContent=("The Computer: Won: " + cWon );

    alert(result[0]);

    if(pWon==5) alert("You won!"),reset();
    else if(cWon==5) alert("You lost!"),reset();
})
})

function reset(){
    cWon=0;
    cTied=0;
    cLost=0;

     // Player Score
    pWon=0;
    pTied=0;
    pLost=0;

    playerScore.textContent=("You: Won: " + pWon );
computerScore.textContent=("The Computer: Won: " + cWon );
}