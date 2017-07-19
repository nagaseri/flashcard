//requiring the inquirer package and the constructor objects 
var inquirer = require("inquirer");
var basicQuestions = require("./basicQuestions.json");
var BasicCard = require("./BasicCard.js");

//cloze flash card questions start as an empty array
var basicQuestionsArray = [];

for(var i = 0; i < basicQuestions.length; i++){
	var newCard = new BasicCard (basicQuestions[i].front, basicQuestions[i].back)
	basicQuestionsArray.push(newCard);
}

for(var i = 0; i < basicQuestionsArray.length; i++){
	askQuestion();
}

function askQuestion(){
	inquirer
    .prompt({
      name: "question",
      type: "input",
      message: basicQuestionsArray[0].front
    })
    .then(function(answer) {
    	console.log(answer);
    })
}