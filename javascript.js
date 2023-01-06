function getComputerChoice()
{
    const compInput = new Array("ROCK","PAPER","SCISSOR");
    const random = Math.floor(Math.random() * compInput.length);
    return compInput[random];
}

function getPlayerChoice()
{
let userChoice;
let repeatRound =false;
do
{
    userChoice= prompt("Rock,Paper or Scissor?");
    userChoice= userChoice.toUpperCase();
    switch(userChoice)
    {
        case "ROCK":
            repeatRound=false;
            return userChoice 
            break;
        case "PAPER":
            repeatRound=false;
            return userChoice
            break;
        case "SCISSOR":
            repeatRound=false;
            return userChoice
            break;
        default:
        repeatRound =true;
        alert("Please enter only Rock,Paper or Scissor!")
    }  
}
while(repeatRound===true)
}

function playRound(playerSelecetion,computerSelection)
{
    const outcome=["default","default"];

    if(playerSelecetion ==="ROCK" && computerSelection==="SCISSOR")
    {
        outcome[0]="Computer chooses SCISSOR, you win!", outcome[1]="win"
        return outcome
    }
    else if(playerSelecetion==="ROCK" && computerSelection==="ROCK")
    {
         outcome[0]="Computer chooses ROCK, it's a draw!", outcome[1]="draw"
        return outcome
    }
    else if(playerSelecetion==="ROCK" && computerSelection==="PAPER")
    {
        outcome[0]="Computer chooses PAPER, you lose!", outcome[1]="lose"
        return outcome
    }
    else if(playerSelecetion ==="PAPER" && computerSelection==="ROCK")
    {
         outcome[0]="Computer chooses ROCK, you win!", outcome[1]="win"
        return outcome
    }
    else if(playerSelecetion==="PAPER" && computerSelection==="PAPER")
    {
         outcome[0]="Computer chooses PAPER, it's a draw!",outcome[1]="draw"
        return outcome
    }
    else if(playerSelecetion==="PAPER" && computerSelection==="SCISSOR")
    {
        outcome[0]="Computer chooses SCISSOR, you lose!",outcome[1]="lose"
        return outcome
    }
    else if(playerSelecetion ==="SCISSOR" && computerSelection==="PAPER")
    {   outcome[0]="Computer chooses PAPER, you win!",outcome[1]="win"
        return outcome
    }
    else if(playerSelecetion==="SCISSOR" && computerSelection==="SCISSOR")
    {
        outcome[0]="Computer chooses SCISSOR, it's a draw!",outcome[1]="draw"
        return outcome
    }
    else if(playerSelecetion==="SCISSOR" && computerSelection==="ROCK")
    {
        outcome[0]="Computer chooses SCISSOR, you lose!",outcome[1]="lose"
        return outcome
    }

}

function game()
{
    let winCounter =0;
    let drawCounter =0;
    let loseCounter =0;

        for(let i=0;i<5;i++)
        {
            const result = playRound(getPlayerChoice(),getComputerChoice())
            {
                alert(result[0]);

                if (result[1]==="win")
                {
                    winCounter++
                    console.log(winCounter);
                }
                else if(result[1]==="draw")
                {
                    drawCounter++
                    console.log(drawCounter);
                }
                else
                {
                    loseCounter++;
                    console.log(loseCounter);
                }
            }
        }

        alert("You won " + winCounter +", tied " + drawCounter + " and lost " + loseCounter +" of 5 rounds")

        if(winCounter>loseCounter && winCounter> drawCounter)
            {
            alert("You won!")
            }
        else if(drawCounter>winCounter && drawCounter>loseCounter)
            {
            alert("It's a draw!")
            }
        else if(winCounter===drawCounter && winCounter>loseCounter && drawCounter>loseCounter || loseCounter===winCounter && loseCounter>drawCounter && winCounter>drawCounter||drawCounter===loseCounter && drawCounter>winCounter && loseCounter> winCounter)
        {
            alert("It's a draw!")
        }
        else
            {
            alert("You lost!")
            }
        winCounter=0;
        loseCounter=0;
        drawCounter=0;
}

document.getElementById("button").onclick =function()
{
game();
}


