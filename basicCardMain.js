//requiring the inquirer package and the constructor objects 
var inquirer = require("inquirer");
var basicQuestions = require("./basicQuestions.json");
var BasicCard = require("./BasicCard.js");

//cloze flash card questions start as an empty array
var basicQuestionsArray = [];

questionCount = 0;

//loop through the json object to populate the empty array 
for(var i = 0; i < basicQuestions.length; i++){
	var newCard = new BasicCard (basicQuestions[i].front, basicQuestions[i].back)
	basicQuestionsArray.push(newCard);
}

//loop through the array to ask the inquirer prompt
if(questionCount < basicQuestionsArray.length){
	askQuestion();
}


//use inquirer to ask the user the questions
function askQuestion(){
	inquirer
    .prompt({
      name: "question",
      type: "input",
      message: basicQuestionsArray[0].front
    })
    .then(function(answer) {
    	Object.keys(answer).forEach(function (key) {
  			console.log(answer[key]);
    		questionCount++;
    		console.log(questionCount);
    	})
    })
}