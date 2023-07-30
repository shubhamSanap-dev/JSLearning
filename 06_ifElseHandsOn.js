console.log("===========step 1 ==============================================");
function evenOdd(num){
    if (num%2==0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);


console.log("===========step 2 ==============================================");

function characterLen(str){
    if (str.length>10) {
        console.log(`${str} string contains more than 10 char`);
    } else {
        console.log(`${str} string contains less than 10 char`);
    }
}

characterLen("JavaScript - ES6");
characterLen("JavaScript");

console.log("===========step 2 ==============================================");

function stringCheck(str){
    if (str.startsWith("Java")) {
        console.log(`${str} string starts with Java`);
    } else {
        console.log(`${str} string does not starts with Java`);
    }
}

stringCheck("JavaScript Lnanguage");
stringCheck("Python Language")
