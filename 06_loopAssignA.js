console.log("@WAP to count number of vowels in the string=======================================");
function vowelsCount(str){
    var  Count=0;
    for(i=0; i<str.length; i++){
        var char=str.charAt(i);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 

        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
          console.log(char);  
            Count=Count+1;
        }
    }
    console.log(`total number of vowels in the string is ${Count}`);
}


vowelsCount("I am very good IT Developer");

console.log("@WAP to get sum of cube of num 1-5=================================================");

function cubeOfNumbers(){
    
    for(i=1; i<=5; i++){
      console.log(`${i}^3 = ${i**3}`);  
      
    }
}
cubeOfNumbers();

console.log("@wap to log odd positioned char=============================================");

function oddPositionedChars(str){
  for(i=0; i<=str.length; i=i+2){
    let char =str.charAt(i)
    console.log(char);
  }
}

oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon i will be anguler IT champ");