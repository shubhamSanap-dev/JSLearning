
console.log("====================step 1=================================================================================");
var greaterNumber = function(a ,b){
    var result = a > b ?   `greater number amongst ${a} and ${b} is ${a}`: `greater number amongst ${a} and ${b} is ${b}` ;
    console.log(result);
}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("====================step 2=================================================================================");

var isEvenOrOddNum = function(a){
    var res = a%2==0 ?  `given number ${a} is even number` :   `given number ${a} is odd number`
    console.log(res);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);


console.log("====================step 2=================================================================================");



var wordLength = function (str) {
    var res1 = str.length%2==0 ? `length of the word ${str} is ${str.length} which is even number` :`length of the word ${str} is ${str.length} which is odd number` 
    console.log(res1);
}

wordLength("Javascript");
wordLength("developer");
wordLength("Google");