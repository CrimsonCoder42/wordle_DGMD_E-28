# wordle_DGMD_E-28


Due Date
Apr 6 at 9pm EST
Summary
Utilize Javascript objects plus an API to create a one-page game app.
Task:
You are tasked with creating an app to implement the popular Wordle game (ref:  
https://www.nytimes.com/games/wordle/index.html)
Note that your implementation does not have to match the UI of NY Times version – the link 
is provided for reference.
Your submission will be judged on your ability to leverage objects within your design and to 
create an intuitive UI.
You are required to use an API for the vocabulary. You may use an additional API if desired.
API’s must return JSON and must use XMLHttpRequest or a promise or a promise via fetch.
Game play:
The player has 6 tries to guess a 5 letter word.
Guesses must be valid 5 letter words (you will need to check this)
For each letter in the guess, you must report one of three results: 
if the letter is not in the answer
if the in the answer but in a different place than in your guess word
if the letter is in the same place as in the guess word
Here is an example response:
Answer:  PRIDE
Guess: DOPED
the D is in the wrong place
the O is not in the word
the P is in the wrong place
the E is in the wrong place
the second D is in not in the word
The game ends when the user guesses the word or uses all 6 guesses.
Required Features:
Display a used letter list so that the user can avoid letters that are eliminated.
Include an optional “debug” mode (switchable at the start of the game) that displays the 
answer so that it is easier to check correct operation.
Allow the user to play multiple times.
Responsive to tablet size (down to 600px)
Optional Features:
Track statistics of wins and losses- and how many guesses a win needed.
Some animation when the user wins.
Responsive to phone size (< 600px)
Additional features are encouraged once the requirements are met.
Deliverables: 
PDF with:
URL 
Copy of the code
Cite the API you used – and why
Answer to the question:  
What was the most satisfying part of this assignment?
Rubric
Works to spec 40%
Code quality 40%
UI quality 20%
NOTE:  a score of 8 points or more over the score for assignment 3 will qualify to drop the 
score for assignment 3.