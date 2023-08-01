//program to reverse string

function reverseString(str){
    let reversedstr = " ";
    for(i=str.length-1; i>=0; i--){
        reversedstr += str.charAt(i);
    }
    console.log(reversedstr);
}
reverseString("Hard work always pays back");
reverseString("Soon i will be Anguler IT Champ");