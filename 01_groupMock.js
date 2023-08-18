



const array = [7, 0, 8, 5, 10];
//WAP to print an array in descending order
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] > array[j]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);



//shallow copy 
let shubham = {
  age:25,
  addtress:"sangli",
  collge:{
    name:"sbgi",
    passout:"2021"
  }
}

let shubham2 = {...shubham};

shubham2.addtress="pune";
shubham2.collge.passout=2023;
console.log(shubham2.collge);
console.log(shubham.collge);
