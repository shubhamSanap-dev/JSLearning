// remove duplicates using for loop only
let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];

let uniqueArr = [];
for(let i=0; i<array.length; i++){
    if(
        uniqueArr.indexOf(array[i])== -1
    ){
        uniqueArr.push(array[i]);
    }
}

console.log(uniqueArr);