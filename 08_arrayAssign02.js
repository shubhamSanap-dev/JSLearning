
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(arrayNumbers.length);

//log only first and last element

const arrayOne = arrayNumbers.slice(0,1);
const arrayTwo = arrayNumbers.slice(-1);
const firstLast = arrayOne.concat(arrayTwo);
console.log(firstLast);

//log third last element 

const thirdArray = arrayNumbers[arrayNumbers.length - 3];
console.log( "third array",thirdArray);

//all even numbers 

for (let i=0; i<arrayNumbers.length; i++) {
    if (arrayNumbers[i]%2==0) {
        const evenElements=arrayNumbers[i]
        console.log(evenElements);
    }
}

//all odd numbered

for (let i=0; i<arrayNumbers.length; i++) {
    if (arrayNumbers[i]%2!=0) {
        const oddElements=arrayNumbers[i]
        console.log("odd numbers",oddElements);
    }
}

//sum of all numberes in arrays
let sum=0;
for (let i=0; i<arrayNumbers.length; i++){
     sum += arrayNumbers[i];
}
console.log(sum);

//sumbers which are multiple of 5

for (let i=0; i<arrayNumbers.length; i++) {
    if (arrayNumbers[i]%5==0) {
        const multipleOf5=arrayNumbers[i]
        console.log(multipleOf5);
    }
}
