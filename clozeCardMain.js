//requiring the inquirer package and the constructor objects 
var inquirer = require("inquirer");
var clozeQuestions = require("./clozeQuestions.json");
var ClozeCard = require("./ClozeCard.js");

//cloze flash card questions start as an empty array
var clozeQuestionsArray = [];

//start question count at 0
questionCount = 0;

// loop through the json object to populate the empty array 
for(var i = 0; i < clozeQuestions.length; i++){
	var newCard = new ClozeCard (clozeQuestions[i].full, clozeQuestions[i].cloze);
	clozeQuestionsArray.push(newCard);
}
// ClozeCard[i].partial

//end game function
function endGame(){
	console.log('Good job, you finished!');
	questionCount = 0;
}

//start game function 
function startGame(){
	if (questionCount < clozeQuestionsArray.length) {
    	askQuestion();
	}
	  // Otherwise end the game
	else {
	    endGame();
  	}
}

//ask question function
function askQuestion(){
	inquirer
	    .prompt({
	      name: "question",
	      type: "input",
	      message: clozeQuestionsArray[questionCount].partial()
	    })
	    .then(function(answer) {
	    	Object.keys(answer).forEach(function (key) {
	    		if(answer[key] == clozeQuestionsArray[questionCount].cloze){
		    		questionCount++;
		    		console.log('You are correct!');
		    		startGame();
	    		}
	    		else{
	    			console.log("You are incorrect, the correct answer is '" + clozeQuestionsArray[questionCount].back + "'.");
	    			questionCount++;
	    			startGame();
	    		}
	    	})
	    })
}

startGame();