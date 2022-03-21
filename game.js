var key = "";
var word = [];
var refWord = words[Math.trunc(Math.random()*words.length)]; /*trunc= delete decimal part */
var currentWord = 0;
var currentLetter = 0;
var gameSet = false;
var winner = false;
var wordCorrect=[];


document.addEventListener('keydown', function(event)
{
    if(gameSet){
        return;
    }
    var key = event.key.toLowerCase();
    if(key=="backspace" && currentLetter>0){
        word.pop();
        currentLetter--;
        newBlocks = "letter-"+currentWord+currentLetter;
        document.getElementById(newBlocks).innerHTML = "";
    }
    console.log(key);
    var newBlocks = "letter-"+currentWord+currentLetter;
    if((isLetter(key)&&key.length==1)){
        word.push(key);
        document.getElementById(newBlocks).innerHTML = key;
        console.log(currentLetter);
        currentLetter++;
        if(currentLetter>4){
            compareLetters();
            if(word.join("") === refWord.toString()){
                console.log("This is the correct word");
                gameSet=true;
                winner=true;
                alert("AYYY");
            } else{
                if(words.includes(word.join("")))
                {
                    console.log("This is not the correct word");
                    
                    currentWord++;
                    if(currentWord==6){
                        gameSet=true;
                        winner=false;
                        alert("NOOO");
                    }
                    currentLetter = 0;
                    word.length = 0;
                }
                else{
                    alert("NOT A WORD!"); 
                    currentLetter=0;
                    word.length = 0;
                    for(i=0;i<5;i++){
                        newBlocks = "letter-"+currentWord+i;
                        document.getElementById(newBlocks).innerHTML = "";
                    } 
                }
            }
        }
    }   
})

function isLetter(key){ //is it a letter between a and z?
    if (key >= 'a' && key <= 'z'){
        console.log("is letter");
        return true;
    } else{
        console.log("This is not a valid letter.");
        return false;
    }
}

function compareLetters(){      //is position and letter ok?

	wordCorrect = ["x","x","x","x","x"];
	
    for(i=0;i<word.length;i++){
		var newBlocks = "letter-"+currentWord+i;
		for(j=0;j<refWord.length;j++){
			if(word[i]==refWord[i]){
				wordCorrect[i]="g";
				document.getElementById(newBlocks).classList.add("correct")
				console.log(wordCorrect);
			} 
			else if((word[i]==refWord[j])&&(wordCorrect[i]!="g")){ //should not check on wordcorrect[i] but if word and refword are y at a position.
				wordCorrect[i]="o";
				document.getElementById(newBlocks).classList.add("correct-pos");
				console.log(wordCorrect);
			}
		}	
	}
}