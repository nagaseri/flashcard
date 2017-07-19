DESCRIPTION: 

This application is a basic flash card and a Cloze flash card question game that tests the user's knowledge on trivial trivia. 

In the basic flash card game, the user is prompted with a question and asked to input his or her full answer. 

The correct answer is then shown, regardless of if the user's answer was correct.

In the Cloze flash card question game, the user is shown the question with a key part of the question left out, and asked to input his or her guess as to what the missing part of the question is. The correct answer to the question is then displayed, regardless of if the user's answer was correct.'

The complete list of questions and answers lives in the JSON files. The basic flash card constructor object is in the BasicCard.js, and the Cloze flash card constructor object is in the ClozeCard.js file. The functions of each file are in the respective main.js files. 

INSTALLATION: 

To install the application, clone down this repository using this link:

    git clone https://github.com/nagaseri/flashcard.git

Then install the npm inquirer package to properly run the application: 

    npm install inquirer

To run the application, execute the following command: 

    node CLI.js

Enjoy!
