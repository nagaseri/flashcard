//requiring the basic and Cloze flashcard constructor objects 
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//basic flash card questions
var firstQ = new BasicCard(
	'What is a baby dog called?', 'Puppy');
console.log(firstQ.front);
console.log(firstQ.back);
console.log('--------------------------------------');

var secondQ = new BasicCard(
	'What is a baby dog called?', 'Puppy');
console.log(secondQ.front);
console.log(secondQ.back);
console.log('--------------------------------------');

var thirdQ = new BasicCard(
	'What is a baby dog called?', 'Puppy');
console.log(thirdQ.front);
console.log(thirdQ.back);
console.log('--------------------------------------');

var fourthQ = new BasicCard(
	'What is a baby dog called?', 'Puppy');
console.log(fourthQ.front);
console.log(fourthQ.back);
console.log('--------------------------------------');

var fiveQ = new BasicCard(
	'What is a baby dog called?', 'Puppy');
console.log(fiveQ.front);
console.log(fiveQ.back);
console.log('--------------------------------------');

//Cloze card questions
firstQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(firstQ.full);
console.log(firstQ.cloze); 
console.log(firstQ.partial()); 
console.log('-------------------------------------');

secondQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(secondQ.full);
console.log(secondQ.cloze); 
console.log(secondQ.partial()); 
console.log('-------------------------------------');

thirdQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(thirdQ.full);
console.log(thirdQ.cloze); 
console.log(thirdQ.partial()); 
console.log('-------------------------------------');

fourthQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(fourthQ.full);
console.log(fourthQ.cloze); 
console.log(fourthQ.partial()); 
console.log('-------------------------------------');

fifthQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(fifthQ.full);
console.log(fifthQ.cloze); 
console.log(fifthQ.partial()); 
console.log('-------------------------------------');
