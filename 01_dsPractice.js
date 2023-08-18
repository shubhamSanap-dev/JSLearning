//find minimum number in the array

function miniNum(arr){
 if(arr.length ==0){
    return undefined;
 }
 let minArr = arr[0];
 for (let i = 1; i < arr.length; i++) {
    if (minArr > arr[i]) {
        minArr=arr[i]
    }
    
 }
 return minArr;
}

let arr1 = [5, 5, 4, 9, 6, 8];
console.log(`minimum number in given array is ${miniNum(arr1)}`); 