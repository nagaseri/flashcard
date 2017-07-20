//CloeCard constructor object takes in two arguments
	//text: full text
	//cloze: part of the question that is missing 

function ClozeCard (text, cloze){
	this.full = text;
	this.cloze = cloze;
	this.partial = function(){
		var formattedString = this.full.replace(this.cloze, '...');
	return formattedString;
	}
}

module.exports = ClozeCard;