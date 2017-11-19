/*
Rock: cushes Scissors, crushes Trump,
Paper: covers Rock, disproves Spock,
Scissors: decapitates Spock, decapitates Trump,
Spock: Vaporizes rock, smashes Scissors
Trump: tramples paper, deports Spock as an alien.*/


var whatBeatsWhat = {
  'Rock': ['Scissors','Trump'],
  'Scissors': ['Paper','Trump'],
  'Paper': ['Rock','Spock'],
  'Spock': ['Rock', 'Scissors'],
  'Trump': ['Spock','Paper'],
};

var userChoice = getUserInput();

var computerChoice = getComputerChoice();

  console.log('Computer chose ' + computerChoice);

if (getActionsBeatenBy(userChoice).includes(computerChoice)){
  console.log('User wins');
}

else if (getActionsBeatenBy(computerChoice).includes(userChoice)){
  console.log('Computer wins');
}
else {
  console.log('Draw');
}

function getActionsBeatenBy(action){
  /* Get a list of actions that a given action beats.
  Example:
  getActionsBeatenBy ('Rock')
  ['Scissors', 'Trump']
  */
  return whatBeatsWhat[action];

}
function getUserInput(){
  /*
  Will get the user's input and make sure it is valid
  */

  var isValidInput = false;
  var userChoice;
  var validOptions = Object.keys(whatBeatsWhat);

  while (isValidInput === false) {
     userChoice = prompt('Enter '+ validOptions.join(', '));
     isValidInput= validOptions.includes(userChoice);

     if (!isValidInput) {
        console.log('Please only enter a valid option');
      }
  }

  return userChoice;
}

function getComputerChoice(){
  var possibleChoices = Object.keys(whatBeatsWhat);
  var randomNumber = Math.random() * possibleChoices.length;
  var randomWholeNumber = Math.floor(randomNumber);
  return possibleChoices[randomWholeNumber];
}
