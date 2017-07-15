//requiring the inquirer package, the questions file and the main file
var inquirer = require("inquirer");
var questions = require("./questions.js");
var main = require("./main.js");

//cloze flash card questions start as an empty array
var clozeQuestions = [];

//populate the clozeQuestions array
for(var i = 0; i < questions.length -1; i++){

}

inquirer.prompt([
	      {
	        type: "input",
	        name: "firstQ",
	        message: firstQ.front
	      }, 
	    ]).then(function(answers) {
		    checkAnswer();
	    	}
	    });

var printAnswer = function(){
	// console.log(firstQ.front);
	console.log(firstQ.back);
};

var checkAnswer = function(){
	var firstAnswer = answers.firstQ;
	if(firstAnswer === firstQ.back){
    	printAnswer();

}