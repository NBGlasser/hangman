var Letter = function(name){
    this.name = name;
    this.guessed = false;
    this.checker = function(guess){
    if(guess === this.name){
        return this.guessed = true
    }
    else{
        return this.guessed = false
    }
    };
    this.displayLetter = function(){
    if(this.guessed === true){
        return this.name
    }
    else{
        return "_"
    }
    };
    
}

module.exports = Letter;