const resultDiv=document.querySelector(".Result");

    let won=0;
    let tied=0;
    let lost=0;
function getComputerChoice()
{
    const compInput = new Array("ROCK","PAPER","SCISSOR");
    const random = Math.floor(Math.random() * compInput.length);
    return compInput[random];
}

function playRound(playerSelecetion,computerSelection)
{
    const outcome=["default","default"];


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

function game(playerSelecetion)
{
result=playRound(playerSelecetion,getComputerChoice())

    if(result[1]=="win")won+=1
    else if(result[1]=="draw")draw+=1
    else lost+=1


    
    if(won ==5 || tied==5 || lost ==5) alert(result[0]); won=0;tied=0;lost=0;

}

const rockButton=document.querySelector(".Rock");
rockButton.addEventListener("click",function(){

        game("ROCK");

})

const paperButton=document.querySelector(".Paper");
paperButton.addEventListener("click",function(){

        game("PAPER")
})

const scissorButton=document.querySelector(".Scissor");
scissorButton.addEventListener("click",function(){

        game("SCISSOR")
})



