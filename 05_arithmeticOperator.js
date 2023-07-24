

console.log('==========step 1===============================================================');
var square=function(num){
var result=num*num;
console.log(`Square of the number ${num} is ${result}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log('==========step 2===============================================================');

console.log(`Type of function is ${typeof square}`);

console.log('==========step 3===============================================================');

var area=function (length, width) {
   var multi=length*width;
   console.log(`area of rectangle plot is ${multi}`);
}
area(499, 917);

console.log('==========step 4===============================================================');

var swapValues=function(val1 , val2){
    console.log("Before swap values====>" ,val1,val2);
    var temp=val1;
    val1=val2;
    console.log(`After swap values=====> ${val1}`,temp);
}
swapValues("Mahi","Raina");
swapValues(55,77)

console.log('==========step 5===============================================================');

var strOperations= function(str){
    var words=str.split("");
    console.log("total character available in the string===> ", words.length); 
    console.log(`character at index 6 is===> "${str.charAt(6)}"` );
    console.log(`character at index 11 is===> "${str.charAt(11)}"` );
    console.log("last character is===>", str.charAt(str.length-1));
    console.log("first character is====>", str.charAt(0));
    console.log("third last character is===>",str.charAt(str.length-3));
    var word1=str.trim("");
    word=word1.split(/\s+/);
    console.log("total number of word in string is",word.length,"and square is",word.length*word.length);
    
}
strOperations("JS the most populer language of internet")

