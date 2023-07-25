
console.log("====================step 1=================================================================================");
function squareOfWordLength(str){
        var a=str.split("");
        console.log(`length of the word ${str} is`,a.length,"and square is", a.length*a.length);
        
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log("====================step 2=================================================================================");


var calculateAverageWordLength = function () {
    var str = "I am Angular developer";
    var words = str.split(" ");
    var totalWords = words.length;
    var totalCharacters = str.length;
  
    var averageWordLength = totalCharacters / totalWords;
    console.log(`total number of characters in string is ${totalCharacters} by deviding it with number of words in string ${totalWords} we get`,averageWordLength);
    var multiplication = totalCharacters*totalWords;
    console.log(`total number of characters in string is ${totalCharacters} by multiplying it with number of words in string ${totalWords} we get`,multiplication);
  };
  
calculateAverageWordLength();
  
