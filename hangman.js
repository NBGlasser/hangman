var inquirer = require("inquirer");
var wordArr = ["car", "sit", "cup", "rot", "for", "ale", "yum", "kit", "sag", "snap", "jump", "skit"];
var gameWord = wordArr[Math.floor(Math.random() * wordArr.length)];
var display = [];
var guesses = 6;
var wins = 0;
var losses = 0;
var correct = false;

for(var i = 0; i < gameWord.length; i++){
    display.push("_ ")
}
console.log("Guesses remaining: " + guesses)
console.log(display)
var playgame = function(){
inquirer.prompt([
    {name: "userGuess",
    type: "list",
    message: "Pick a letter",
    choices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]},
]).then(function(answers){
correct = false
for(var j = 0; j < gameWord.length; j++){
    if(answers.userGuess === gameWord[j]){
        display[j] = answers.userGuess
        correct = true
    }
    
    
};
if(correct === false){
    guesses--
}
if(display.includes("_ ") === false && guesses > 0){
    wins++
    console.log(display)
    console.log("Wins: " + wins)
}
else if(guesses === 0){
    losses++
    console.log(display)
    console.log("Losses: " + losses)
}
else{
    console.log(display)
    console.log("Guesses remaining: " + guesses)
    playgame()
}

})
}
playgame()