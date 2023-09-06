
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31,60,2,19];

const addTen = arrayNumbers.map((value)=>{
    return value+10;
})

console.log("Original array:");
console.log(arrayNumbers);
console.log("==================================================================================");


console.log("New array with 10 added into each element:");
console.log(addTen);

console.log("==================================================================================");

const cubeArr = arrayNumbers.map((value)=>{
    return value*value*value;
})
console.log("New array with cube of each element");
console.log(cubeArr);

console.log("==================================================================================");

const addIndex = arrayNumbers.map((value, index)=>{
    return value+index
})

console.log("New array with added the index value into its corresponding each array element:");
console.log(addIndex);