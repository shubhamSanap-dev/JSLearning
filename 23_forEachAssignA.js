
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach((value, index) => {
    console.log(`Index Num: ${index}, Value is: ${value}`);
});

console.log(`=================================================================================`);

arrayNumbers.forEach((value) => {
    if (value>0) {
        console.log(`positive Number from array: ${value}`);   
    }
})

console.log(`=================================================================================`);

let negativeArr= [];
arrayNumbers.forEach((value) => {
    if (value < 0 ) {
        negativeArr.push(value);
    }
});
console.log("New Negative Array: ", negativeArr);

console.log(`=================================================================================`);

arrayNumbers.forEach((value) => {
    if (value>=0 && value%2==0) {
        console.log(`Even Number is: ${value}`);
    }
});

console.log(`=================================================================================`);

let sum = 0;
arrayNumbers.forEach((value) =>{
    sum += value; 
})
console.log(`Sum of all the numbers in array is: ${sum}`);

console.log(`=================================================================================`);

arrayNumbers.forEach((value, index ) => {
    if (index%2==0) {
        console.log(`Even index: ${index}, value is: ${value}`);
    }
});