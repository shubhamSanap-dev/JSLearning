
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log("Original Array:");
console.log(arrayRollNumbers);
console.log("==================================================================================================================");
console.log("Reversed Array:");
const reversedArr = arrayRollNumbers.reverse();
console.log(reversedArr);
console.log("==================================================================================================================");
let arr = arrayRollNumbers.sort()
console.log("sort method as it is:");
console.log(arr);
console.log("==================================================================================================================");
let custLogic = [];
custLogic=arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2?1:-1;
})
console.log("ascending order array with custom logic:");
console.log(custLogic);
console.log("==================================================================================================================");

let minArr = [];
minArr = arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2?1:-1;
})
console.log("smallest number in array is: ",minArr[0]);
console.log("==================================================================================================================");

let mixArr = [];
mixArr = arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2?-1:1;
})
console.log("smallest number in array is: ",minArr[0]);
console.log("==================================================================================================================");

const newArr = [...new Set(arrayRollNumbers)]
console.log("new array without duplicates:",newArr);


