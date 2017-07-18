//CloeCard constructor object takes in two arguments
	//text: full text
	//cloze: part of the question that is missing 
var clozeQuestions = require("./clozeQuestions.JSON");
console.log(clozeQuestions);

function ClozeCard (text, cloze){
	this.full = text;
	this.cloze = cloze;
	this.partial = function(){
		var formattedString = this.full.replace(this.cloze, '...');
	}
}

module.exports = ClozeCard;