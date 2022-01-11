var key = "";
var word = [];
var blocks = ["letter-00","letter-01","letter-02","letter-03","letter-04"]
var refWord = ["d","a","n","c","e"];


    document.addEventListener('keydown', function(event)
    {
        var key = event.key.toLowerCase();
        if((isLetter(key)==true&&key.length==1) && (word.length<5)){
            word.push(key);
            document.getElementById(blocks[word.length-1]).innerHTML = key;
            console.log(word);
        } else if(word.length>=4){
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
    for(i=0;i<word.length;i++){
        for(j=0;j<refWord.length;j++){
            if(word[i]==refWord[i]){
                console.log("same letter and place",word[i],refWord[i]);
            } else if(word[i]==refWord[j]){
                console.log("same letter",word[i],refWord[j]);
            } else{
                console.log("not a common letter.",word[i],refWord[j]);
            }
        }
    }
    //console.log(word.charAt(2));
}
