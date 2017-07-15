var BasicCard = require("./BasicCard.js");
var inquirer = require("inquirer");

var firstQ = new BasicCard(
	'What is a baby dog called?', 'Puppy');

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