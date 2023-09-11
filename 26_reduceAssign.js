

const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

let sum = 0 ;
for (const element of array) {
    sum+= element
}
console.log("Sum using traditional way:",sum);

const reduceMethod = array.reduce((total, element)=>{
return total+element;
});
console.log("Sum using reduce method: ",reduceMethod);

let multiple = array.filter((value)=>{
    return value%5==0;
})

multiple = multiple.reduce((runnung, ele)=>{
    return runnung+ele;
})
console.log("Sum of multiples of 5:",multiple);
