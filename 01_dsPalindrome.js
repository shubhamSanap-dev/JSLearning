
//palindrome function 

function isPalindrome (num) {
    //converted numer into string and reversed
   return num == num.toString().split("").reverse().join("");
    
}

let num1 = isPalindrome(121);
console.log(num1);

let num2 = isPalindrome(874);
console.log(num2);

