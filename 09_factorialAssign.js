
//Factorial of number program using for loop
function factorial (num){
    if(num == 1){
        return 1 ;
    }
    let factorial1 = 1;
    for (let i = 2; i <= num; i++) {
        factorial1 *= i; 
    }

    console.log(`factorial of number ${num} is ${factorial1}`);
}


factorial(5);
factorial(9);
factorial(11);
factorial(7);


