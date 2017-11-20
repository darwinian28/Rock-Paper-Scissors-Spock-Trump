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

var userActions = document.querySelectorAll(".user-actions button");

for (var i=0; i < userActions.length; i++){
   var currentAction = userActions[i];
   currentAction.addEventListener("click",function(event){
     var clickedButton = event.target;
     var userChoice = clickedButton.textContent;
     var computerChoice = getComputerChoice();
     setUserSelectionTo(userChoice);
     setComputerSelectionTo(computerChoice);

     if (getActionsBeatenBy(userChoice).includes(computerChoice)){
       setWinnerTo('You');
     }
     else if (getActionsBeatenBy(computerChoice).includes(userChoice)){
       setWinnerTo('Computer');
     }
     else {
       setWinnerTo('Draw');
     }
   });
}
function setUserSelectionTo(action) {
  /*Update the user interface with the option the juser selected.*/
  var userChoiceOutput = document.getElementById("user-choice");
  userChoiceOutput.textContent = action;
}

function setComputerSelectionTo(action) {
  /* Update the user interface with the option the computer selected*/
  var computerChoiceOutput = document.getElementById("computer-choice");
  computerChoiceOutput.textContent = action;
}

function setWinnerTo(result) {
    /* Update the user interface with the winner of the game*/
  var winnerOutput = document.getElementById("winner");
  winnerOutput.textContent = result;
  winnerOutput.classList.add('blink');
}


function getActionsBeatenBy(action){
  /* Get a list of actions that a given action beats.
  Example:
  getActionsBeatenBy ('Rock')
  ['Scissors', 'Trump']
  */
  return whatBeatsWhat[action];

}

function getComputerChoice(){
  var possibleChoices = Object.keys(whatBeatsWhat);
  var randomNumber = Math.random() * possibleChoices.length;
  var randomWholeNumber = Math.floor(randomNumber);
  return possibleChoices[randomWholeNumber];
}
