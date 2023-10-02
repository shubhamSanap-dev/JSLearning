
console.log('______________________class with constructor_____________________________________');

class Details {
    constructor(empName:string, empSal:number, empId:any, company:string){
        console.log('Name:',empName, ' Salary:', empSal, ' ID:', empId, ' company:', company);
                
    }
}

new Details ('shubham', 75000, 'A21', 'infosys' );
new Details('Aashish', 87000, 'A22', 'TCS')

console.log('______________________class Parameter properties_____________________________________');

function display (name : string, clg :any, city:string){
    console.log('Name:',name,' College:',clg,' City:', city);
}
display('Larry gates', 'WCE', 'Sangli');
display('Bill jordan', 'COEP', 'Pune')

console.log('______________________Removing duplicates from Arr_____________________________________');

let inputArr : number[] = [1,2,2,4,5,4,7,8,7,3,6];
let newArr : number[] = [];
for (let i = 0; i < inputArr.length; i++) {
    if (newArr.indexOf(inputArr[i])==-1) {
        newArr.push(inputArr[i]);
    }
}
console.log(inputArr);

console.log(newArr);


