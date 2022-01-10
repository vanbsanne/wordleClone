var key = "";
var word = [];
var blocks = ["letter-00","letter-01","letter-02","letter-03","letter-04"]

clearBlocks();
    document.addEventListener('keydown', function(event)
    {

        var key = event.key.toLowerCase();
        if((isLetter(key)==true) && (word.length<5)){
            word.push(key);
            document.getElementById(blocks[word.length-1]).innerHTML = key;
            console.log(word);
        } else{
            compareLetters(word);
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

function compareLetters(){

}

function clearBlocks()
{
    for (i=0;i>blocks.length;i++){
        blocks[i].innerHTML = "";
    }
}