/* get scores from document */
let userScore = 0;
let computerScore = 0;

/* get user score span to add score */
let userScoreSpan = document.getElementById('user-score');
let computerChoiceSpan = document.getElementById('computer-score');

/* get user choices from document and results */
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const lizardDiv = document.getElementById('lizard');
const spockDiv = document.getElementById('spock');
const resultsDiv = document.getElementById('result');

/* gets random computer choice */
const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  let randNumber = Math.floor(Math.random() * 5);
  return choices[randNumber];
}

/* adds points to player score */
const win = (userChoice, computerChoice) => {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerChoiceSpan.innerHTML = computerScore;

  resultsDiv.innerHTML = `${userChoice} beats ${computerChoice}. You Win!`;
}

/* calls for a draw */
const draw = (userChoice, computerChoice) => {
  userScoreSpan.innerHTML = userScore;
  computerChoiceSpan.innerHTML = computerScore;

  resultsDiv.innerHTML = `It's a draw!`;
}

/* adds points to computer score */
const lose = (userChoice, computerChoice) => {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerChoiceSpan.innerHTML = computerScore;

  resultsDiv.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;

}

/* handles the game results */
const game = (userChoice) => {
  const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
      case 'scissorspaper':
      case 'paperrock':
      case 'rocklizard':
      case 'lizardspock':
      case 'spockscissors':
      case 'scissorslizard':
      case 'lizardpaper':
      case 'paperspock':
      case 'spockrock':
      case 'rockscissors':
        win(userChoice, computerChoice);
        break;
      case 'paperscissors':
      case 'rockpaper':
      case 'lizardrock':
      case 'spocklizard':
      case 'scissorsspock':
      case 'lizardscissors':
      case 'paperlizard':
      case 'spockpaper':
      case 'rockspock':
      case 'scissorsrock':
        lose(userChoice, computerChoice);
        break;
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
      case 'lizardlizard':
      case 'spockspock':
        draw(userChoice, computerChoice);
        break;
    }
}

/* Event handlers for divs clicked */
rockDiv.addEventListener('click', () => {
  game('rock');
})

paperDiv.addEventListener('click', () => {
  game('paper');
})

scissorsDiv.addEventListener('click', () => {
  game('scissors');
})

lizardDiv.addEventListener('click', () => {
  game('lizard');
})

spockDiv.addEventListener('click', () => {
  game('spock');
})