var userChoice = prompt ("Do you choose Rock, Paper, Scissors, Trump or Spock?");
var computerChoice =  Math.floor (Math.random() * 5);

    if (computerChoice === 0)
{
    	computerChoice = "Rock";
}
    else if (computerChoice === 1)
{
    	computerChoice ="Paper";
}
    else if (computerChoice === 2)
{
    	computerChoice = "Scissors";
}
    else if (computerChoice === 3)
{
        computerChoice = "Trump";
}
    else (computerChoice === 4)
{
        computerChoice = "Spock";
}

var compare = function(choice1, choice2) {

    if (choice1 === choice2)
{
    return "The result is a tie!";
}

    else if (choice1 === "Rock")
{
	    if (choice2 === "Scissors")
	{
	    return "Rock wins";
	}
	    else if (choice2 === "Trump")
	{
	    return "Rock wins";
	}
	    else if (choice2 === "Paper")
	{
	    return "Paper wins";
	}
	    else
	{
	    return "Spock wins";
	}
}
    else if (choice1 === "Scissors")
{
	    if (choice2 === "Paper")
	{
	    return "Scissors wins";
	}
	    else if (choice2 === "Trump")
	{
	    return "Scissors wins";
	}
	    else if (choice2 === "Rock")
	{
	    return "Rock wins";
	}
	    else
	{
	    return "Spock wins";
	}
}

    else if (choice1 === "Paper")
{

	    if (choice2 === "Rock")
	{
	    return "Paper wins";
	}
	    else if (choice2 === "Spock")
	{
	    return "Paper wins";
	}
	    else if (choice2 === "Trump")
	{
	    return "Trump wins";
	}
	    else
	{
	    return "Scissors wins";
	}
}
   else if (choice1 === "Spock")
{

	    if (choice2 === "Scissors")
	{
	    return "Spock wins";
	}
	    else if (choice2 === "Rock")
	{
	    return "Spock wins";
	}
	    else if (choice2 === "Paper")
	{
	    return "Paper wins";
	}
	    else
	{
	    return "Trump wins";
	}
}
   else if (choice1 === "Trump")
{
	    if (choice2 === "Paper")
	{
	    return "Trump wins";
	}
	    else if (choice2 === "Spock")
	{
	    return "Lizard wins";
	}
	    else if (choice2 === "Rock")
	{
	    return "Rock wins";
	}
	    else
	{
	    return "Scissors wins";
	}
}
};

var result = compare (userChoice, computerChoice);
console.log(result);
