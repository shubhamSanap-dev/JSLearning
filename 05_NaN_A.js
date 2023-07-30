console.log("Implicit conversion to string------------------------------------------>");

var result;
result = "3" + 2;
console.log(`the + operator performs string concatenation when one of the operands is a string so "3" + 2 results in the string ${result}`);

result = "3" + true;
console.log(`the boolean value is implicitly converted to a string before concatenation so "3" + true will result in the string`, result);

result = "3" + undefined;
console.log(`the value undefined is implicitly converted to a string before concatenation so "3" + undefined will result in the string ${result}`);

result= "3" + null;
console.log(`the value null is implicitly converted to a string before concatenation so "3" + null will result in the string ${result}`);

console.log("Implicit boolean conversion to Number------------------------------------------>");

result = "4" - true;
console.log(`the string "4" is converted to the number 4 and the boolean true is converted to the number 1 and then the subtraction is performed`,result);

result = 4 + true;
console.log(`the boolean value true is implicitly converted to the number 1 before performing the addition restult in ${result}`); 

result = 4 + false;
console.log(`the boolean value false is implicitly converted to the number 0 before performing the addition restult in ${result}`);

console.log("Implicit string conversion to Number------------------------------------------>");

result = "4" - "2";
console.log(`JavaScript converts the strings to numbers before performing the subtraction result in ${result}`);

result = "4" - 2 ; 
console.log(`string "4" is converted to the number 4 and then the subtraction 4 - 2 is performed result in ${result}`);

result = "4" * 2 ; 
console.log(`string "4" is converted to the number 4 and then the multiplication 4 * 2 is performed result in ${result}`);

console.log("some interesting facts------------------------------------------>");

result = 0== " ";
console.log(`0 == " " here empty string " " is converted to the number 0 during the comparison ${result}`);

result = 0 == "0";
console.log(`== converts the string "0" to the number 0 before the comparison and both sides have the same numeric value result in ${result}`);

result = 0 == false;
console.log(`converting boolean value false to 0 result result in ${result}`);

result = null == undefined;
console.log(`== operator considers null and undefined to be equal when performing a loose comparison reasult in ${result}`);

result = 1==[1];
console.log(`[1] is converted to 1 before the comparison and both sides have the same numeric value 1 result in ${result}`);


function num(){

}
num();