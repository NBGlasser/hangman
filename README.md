# hangman
## What I was trying to do
I was trying to make a fully functional hangman game using constructors within Node.

## Tools used
* Bash
* Node
* JavaScript

## What I did
After making the constructors for both the word and letters, and initializing all my variables I built the entire game within a function. The first thing I did was use a for loop to display the word(or lack thereof) on the command line. Then I used Inquirer to take a single letter guess from the user and I compared it against each letter in the word using a for loop. If the word did not contain the letter the user guessed, the number of guesses was decremented. If the user guessed all the letters before running out of guesses, they won, and if they ran out of guesses first, they lost. The function would call itself after each guess or after the game ended and the player opted to play again.

## Issues I had
Most of the issues I had were either entirely scoping issues, or other problems with me putting lines of code outside the boundaries I should have written them in.
