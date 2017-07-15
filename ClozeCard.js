//CloeCard constructor object takes in two arguments
	//text: full text
	//cloze: part of the question that is missing 

var ClozeCard = function(text, cloze){
	//convert user input to lowercase
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	// Confirm that the cloze statement appears within the complete text
	if (!textToLower.includes(clozeToLower)) {
		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}
	//
	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}

module.exports = ClozeCard;