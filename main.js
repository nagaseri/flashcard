//requiring the basic and Cloze flashcard constructor objects 
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//basic flash card questions
var firstQ = new BasicCard('What is a baby dog called?', 'Puppy');
console.log(firstQ.front);
console.log(firstQ.back);
console.log('--------------------------------------');

var secondQ = new BasicCard('What is a baby dog called?', 'Puppy');
console.log(secondQ.front);
console.log(secondQ.back);
console.log('--------------------------------------');

var thirdQ = new BasicCard('What is a baby dog called?', 'Puppy');
console.log(thirdQ.front);
console.log(thirdQ.back);
console.log('--------------------------------------');

var fourthQ = new BasicCard('What is a baby dog called?', 'Puppy');
console.log(fourthQ.front);
console.log(fourthQ.back);
console.log('--------------------------------------');

var fiveQ = new BasicCard('What is a baby dog called?', 'Puppy');
console.log(fiveQ.front);
console.log(fiveQ.back);
console.log('--------------------------------------');

//Cloze card questions
firstClozeQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(firstClozeQ.full);
console.log(firstClozeQ.cloze); 
console.log(firstClozeQ.partial()); 
console.log('-------------------------------------');

secondClozeQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(secondClozeQ.full);
console.log(secondClozeQ.cloze); 
console.log(secondClozeQ.partial()); 
console.log('-------------------------------------');

thirdClozeQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(thirdClozeQ.full);
console.log(thirdClozeQ.cloze); 
console.log(thirdClozeQ.partial()); 
console.log('-------------------------------------');

fourthClozeQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(fourthClozeQ.full);
console.log(fourthClozeQ.cloze); 
console.log(fourthClozeQ.partial()); 
console.log('-------------------------------------');

fifthClozeQ = new ClozeCard('A puppy is a baby dog', 'puppy');
console.log(fifthClozeQ.full);
console.log(fifthClozeQ.cloze); 
console.log(fifthClozeQ.partial()); 
console.log('-------------------------------------');
