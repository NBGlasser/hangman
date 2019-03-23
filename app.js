var Word = require("./word.js");
var inquirer = require("inquirer");
var wordArr = ["car", "sit", "cup", "rot", "for", "ale", "yum", "kit", "sag", "snap", "jump", "skit"];
var gameWord = new Word(wordArr[Math.floor(Math.random() * wordArr.length)])
var guesses = 6;
var wins = 0;
var losses = 0;
var correct = false;
gameWord.populate()

console.log("Guesses remaining: " + guesses)

var playgame = function(){
    for(var j = 0; j < gameWord.arr.length; j++){
    console.log(gameWord.arr[j].displayLetter())
    }
    inquirer.prompt([
        {name: "userGuess",
        type: "list",
        message: "Pick a letter",
        choices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]},
    ]).then(function(answers){
        
        for(var i = 0; i < gameWord.arr.length; i++){
            
            if(gameWord.arr[i].name === answers.userGuess){
                correct = true;
                gameWord.arr[i].guessed = true;
            }
            
        }
        if(correct === false){
            guesses--
        }
        var check = true
        for(var k = 0; k < gameWord.arr.length; k++){
            if(gameWord.arr[k].guessed === false){
                check = false
            }
        }
        if(check === true){
            wins++
            console.log("Wins: " + wins)
        }
        else if(guesses === 0){
            losses++
            console.log("Losses: " + losses)
        }
        else{
            console.log("Guesses remaining: " + guesses)
            playgame()
        }

    })
}
playgame()
// console.log(gameWord.arr)

