var Word = require("./word.js");
var inquirer = require("inquirer");
var wordArr = ["car", "sit", "cup", "rot", "for", "ale", "yum", "kit", "sag", "snap", "jump", "skit"];
var gameWord = new Word(wordArr[Math.floor(Math.random() * wordArr.length)])
var guesses = 6;
var wins = 0;
var losses = 0;
var correct = false;
var display = ""
gameWord.populate()

console.log("Guesses remaining: " + guesses)

var playgame = function(){
    display = ""
    for(var j = 0; j < gameWord.arr.length; j++){
    display = display.concat(gameWord.arr[j].displayLetter(), " ")
    }
    console.log(display)

    inquirer.prompt([
        {name: "userGuess",
        type: "input",
        message: "Pick a letter",
        validate: function (input){
            if(input.length > 1 || (["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]).includes(input) === false){
                return false
            }
            else{
                return true
            }
        }}
        //choices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]},
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
        correct = false;
        var check = true
        for(var k = 0; k < gameWord.arr.length; k++){
            if(gameWord.arr[k].guessed === false){
                check = false
            }
        }
        if(check === true){
            wins++
            console.log("Wins: " + wins)
            console.log("Losses: " + losses)
            display = ""
            for(var j = 0; j < gameWord.arr.length; j++){
            display = display.concat(gameWord.arr[j].displayLetter(), " ")
            }
            console.log(display)
            inquirer.prompt([
                {name: "again",
                type: "confirm",
                message: "Would you like to play again?"}
                ]).then(function(res){
                if(res.again){
                    gameWord = new Word(wordArr[Math.floor(Math.random() * wordArr.length)])
                    gameWord.populate();
                    guesses = 6;
                    check = false;
                    playgame()
                }
            })
        }
        else if(guesses === 0){
            for(var l = 0; l < gameWord.arr.length; l++){                       
                gameWord.arr[l].guessed = true;
            }
            display = ""
            for(var j = 0; j < gameWord.arr.length; j++){
            display = display.concat(gameWord.arr[j].displayLetter(), " ")
            }
            console.log(display)
            losses++
            console.log("Wins: " + wins)
            console.log("Losses: " + losses)
            inquirer.prompt([
                {name: "again",
                type: "confirm",
                message: "Would you like to play again?"}
                ]).then(function(res){
                if(res.again){
                    gameWord = new Word(wordArr[Math.floor(Math.random() * wordArr.length)])
                    gameWord.populate();
                    guesses = 6;
                    check = false;
                    playgame()
                }
            })
        }
        else{
            console.log("Guesses remaining: " + guesses)
            playgame()
        }

    })
}
playgame()
// console.log(gameWord.arr)

