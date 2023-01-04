function getComputerChoice()
{
    const compInput = new Array("Rock","Paper","Scissor");
    const random = Math.floor(Math.random() * compInput.length);
    return compInput[random];
}

document.getElementById("button").onclick =function()
{   
    getPlayerChoice(); 
}

function getPlayerChoice()
{
  const choice =  document.getElementById("input").value

    switch(choice.toUpperCase())
    {
        case "ROCK":
            console.log("ROCK")
            break;
        case "PAPER":
            console.log("PAPER")
            break;
        case "SCISSOR":
            console.log("SCISSOR")
            break;
        default:
            console.log("Please enter only Rock,Paper or Scissor!")
            break;

    }

}
/*
document.getElementById("rock").onclick =function()
{
getPlayerChoice("Rock")
} 
document.getElementById("paper").onclick= function()
{
getPlayerChoice("Paper")
} 
document.getElementById("scissor").onclick= function()
{
getPlayerChoice("Scissor")
} 

function playRound(playerSelecetion,computerSelection)
{
    if(playerSelecetion ==="Rock" && computerSelection==="Scissor")
    {
        console.log("Computer chooses Scissor, you win!")
    }
    else if(playerSelecetion==="Rock" && computerSelection==="Rock")
    {
        console.log("Computer chooses Rock, it's a draw!")
    }
    else if(playerSelecetion==="Rock" && computerSelection==="Paper")
    {
        console.log("Computer chooses Paper, you lose!")
    }
    else if(playerSelecetion ==="Paper" && computerSelection==="Rock")
    {
        console.log("Computer chooses Rock, you win!")
    }
    else if(playerSelecetion==="Paper" && computerSelection==="Paper")
    {
        console.log("Computer chooses Paper, it's a draw!")
    }
    else if(playerSelecetion==="Paper" && computerSelection==="Scissor")
    {
        console.log("Computer chooses Scissor, you lose!")
    }
    else if(playerSelecetion ==="Scissor" && computerSelection==="Paper")
    {
        console.log("Computer chooses Paper, you win!")
    }
    else if(playerSelecetion==="Scissor" && computerSelection==="Scissor")
    {
        console.log("Computer chooses Scissor, it's a draw!")
    }
    else if(playerSelecetion==="Scissor" && computerSelection==="Rock")
    {
        console.log("Computer chooses Scissor, you lose!")
    }

}
*/
