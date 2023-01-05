function getComputerChoice()
{
    const compInput = new Array("ROCK","PAPER","SCISSOR");
    const random = Math.floor(Math.random() * compInput.length);
    return compInput[random];
}

function getPlayerChoice()
{
  let userChoice= prompt("Rock,Paper or Scissor?");
    switch(userChoice.toUpperCase())
    {
        case "ROCK":
            return choice = "ROCK"
        case "PAPER":
            return choice = "PAPER"
            break;
        case "SCISSOR":
            return choice = "SCISSOR"
            break;
    }  
}

function playRound(playerSelecetion,computerSelection)
{
    const outcome=["default","default"]

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
                alert(result[0])
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

        if(winCounter>loseCounter && winCounter> drawCounter)
            {
            alert("You have won " + winCounter +" of 5 rounds, you Won!")
            }
        else if(drawCounter>winCounter>loseCounter)
            {
            alert("You tied " + drawCounter +" of 5 rounds, it's a draw!")
            }
        else
            {
        alert("You have lost " + loseCounter +" of 5 rounds, you lose!")
            }
}

game();
    


