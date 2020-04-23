let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);



const compareGuesses = (humanGuess, computerGuess, secretNum) =>{
  let humanDiff = Math.abs(humanGuess - secretNum);
  let compDiff = Math.abs(computerGuess - secretNum);

  return humanDiff <= compDiff;
  
};

const updateScore = (winningMessage) =>{
  switch(winningMessage){
    case('human'):
      humanScore ++;
      break;
    case('computer'):
      computerScore ++;
      break;
  }
};

const advanceRound = () => currentRoundNumber ++;