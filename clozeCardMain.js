
function askClozeQuestion(){
	inquirer.prompt([
	    {
		    type: "input",
		    name: "firstClozeQ",
		    message: firstClozeQ.partial
	    } 
	    ]).then(function(answers) {
		    checkClozeAnswer();
	    	});
}

askClozeQuestion();

var printClozeAnswer = function(){
	console.log(firstClozeQ.full);
};

var checkClozeAnswer = function(){
	var firstAnswer = answers.firstQ;
	if(firstAnswer === firstClozeQ.cloze){
    	printAnswer();
    }
}