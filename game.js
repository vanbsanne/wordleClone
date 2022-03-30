var key = "";
var word = [];
//var refWord = words[Math.trunc(Math.random()*words.length)]; /*trunc= delete decimal part */
var refWord = ["d","a","n","c","e"];
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
    var newBlocks = "letter-"+currentWord+currentLetter;
    if((isLetter(key)&&key.length==1)){
        word.push(key);
        document.getElementById(newBlocks).innerHTML = key;
        currentLetter++;
        if(currentLetter>4){
            compareLetters();
            if(word.join("") === refWord.toString()){
                gameSet=true;
                winner=true;
                alert("AYYY");
            } else{
                if(words.includes(word.join("")))
                {    
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
        return true;
    } else{
        return false;
    }
}

function compareLetters() { //is position and letter ok?
    var used = [false, false, false, false, false];
    var color = ["w", "w", "w", "w", "w"]; //w = white, g = green, y = yellow

    for (i = 0; i < word.length; i++)
    {

        if (word[i] == refWord[i] && !used[i])
        {
            used[i] = true;
            color[i] = "g"
        }
        else
        {
            var index = refWord.indexOf(word[i]);

            if (index >= 0 && !used[index])
            {
                used[index] = true;
                color[i] = "y"
            }
        }
    }

    for (var i = 0; i < used.length; i++)
    {
        var id = "letter-" + currentWord + i;

        if (color[i] == "g")
        {
            document.getElementById(id).classList.add("correct");
        }
        else if (color[i] == "y")
        {
            document.getElementById(id).classList.add("correct-pos");
        }
    }
}