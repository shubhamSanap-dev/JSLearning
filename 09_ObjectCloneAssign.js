//shallow clone and push new elements 
let arrayNums = [20, 3, 4, 56, 90, 400, 49];

let modifiedArray = [...arrayNums];
modifiedArray.push(55,66);
console.log(arrayNums);
console.log(modifiedArray);

arrayNums.push(10,25);
console.log(arrayNums);

let arrayEven = [2, 30, 14, 8]

arrayNums = arrayNums.concat(...arrayEven);//concating two arrays
console.log(arrayNums);

//secont step

const employee_info = {
    emp_id: 27,
    emp_name: "John Wick",
    salary: {
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR"
    },
    address: {
        locality:{
            colony: "OM Vrindavan Society",
        street: "Kanchi Pokli, 431202",
            },
            city: "Mumbai",
            state: "Maharashtra",
            country: "India"    
    },
    mobiles: ["+91 8600 3456 88", " 1800- 4567 32", " +91- 9096 5678 77"]
}

console.log(`Address: ${employee_info.address.locality.colony} ${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country} `);

console.log(`Mobile numbers: ${employee_info.mobiles}`);

let deepCloned = JSON.parse(JSON.stringify(employee_info));//deepcopy using json.stringify

deepCloned.salary.july_month="80,000INR";//updated the salary details
console.log(deepCloned.salary);
console.log(employee_info.salary);

deepCloned.address.country="UK";//updated the country details
console.log(deepCloned.address);
console.log(employee_info.address);

