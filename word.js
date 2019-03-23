var Letter = require("./letter.js");
var Word = function(name){
    this.name = name;
    this.arr = []
    this.populate = function(){
        for(var i = 0; i < name.length; i++){
            var letter = new Letter(name[i])
            this.arr.push(letter)
        }
        // console.log(this.arr)
    }
}


module.exports = Word;