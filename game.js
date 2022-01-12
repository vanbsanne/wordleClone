var key = "";
var word = [];
var blocks0 = ["letter-00","letter-01","letter-02","letter-03","letter-04"]
var blocks1 = ["letter-10","letter-11","letter-12","letter-13","letter-14"]
var blocks2 = ["letter-20","letter-21","letter-22","letter-23","letter-24"]
var blocks3 = ["letter-30","letter-31","letter-32","letter-33","letter-34"]
var blocks4 = ["letter-40","letter-41","letter-42","letter-43","letter-44"]
var blocks5 = ["letter-50","letter-51","letter-52","letter-53","letter-54"]
var refWord = ["d","a","n","c","e"];

listening(blocks0);
function main(){
    var blocks=[blocks0,blocks1,blocks2,blocks3,blocks4,blocks5];
    for(i=0;i<5;i++){
        word.length = 0;
        listening(blocks[i]);
    }
}

function listening(blocks){
    document.addEventListener('keydown', function(event)
    {
        var key = event.key.toLowerCase();
        if((isLetter(key)==true&&key.length==1) && (word.length<5)){
            word.push(key);
            document.getElementById(blocks[word.length-1]).innerHTML = key;
            console.log(word);
        } else if(word.length>=4){
            compareLetters(blocks);
        }  
    })
}

function isLetter(key){ //is it a letter between a and z?
    if (key >= 'a' && key <= 'z'){
        console.log("is letter");
        return true;
    } else{
        console.log("This is not a valid letter.");
        return false;
    }
}

function compareLetters(blocks){      //is position and letter ok?
    for(i=0;i<word.length;i++){
        for(j=0;j<refWord.length;j++){
            if(word[i]==refWord[i]){
                console.log("same letter and place",word[i],refWord[i]);
                document.getElementById(blocks[i]).classList.add("correct");
            } else if(word[i]==refWord[j]){
                console.log("same letter",word[i],refWord[j]);
                document.getElementById(blocks[i]).classList.add("correct-pos");
            } else{
                console.log("not a common letter.",word[i],refWord[j]);
            }
        }
    }
}