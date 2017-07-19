//requiring the inquirer package and the constructor objects 
var inquirer = require("inquirer");
var basicQuestions = require("./basicQuestions.json");
var BasicCard = require("./BasicCard.js");

//cloze flash card questions start as an empty array
var basicQuestionsArray = [];
console.log('initial', basicQuestionsArray);

//start question count at 0
questionCount = 0;

// loop through the json object to populate the empty array 
for(var i = 0; i < basicQuestions.length; i++){
	var newCard = new BasicCard (basicQuestions[i].front, basicQuestions[i].back)
	basicQuestionsArray.push(newCard);
}

console.log('after', basicQuestionsArray);

//end game function
function endGame(){
	console.log('Good job, you finished!');
	questionCount = 0;
}

function askQuestion(){
	inquirer
	    .prompt({
	      name: "question",
	      type: "input",
	      message: basicQuestionsArray[questionCount].front
	    })
	    .then(function(answer) {
	    	Object.keys(answer).forEach(function (key) {
	    		if(answer[key] == basicQuestionsArray[questionCount].back){
		    		// questionCount++;
		    		console.log('You are correct!');
	    		}
	    		else{
	    			console.log("You are incorrect, the correct answer is '" + card.back + "'.");
	    			// questionCount++;
	    			askQuestion();
	    		}
	    	})
	    })
}

function startGame(){
		//loop through the array to ask the inquirer prompt 
		for(questionCount; questionCount < basicQuestionsArray.length; questionCount++){
			// console.log('questionCount', questionCount);
			askQuestion();

		}
		// endGame();
}

startGame();