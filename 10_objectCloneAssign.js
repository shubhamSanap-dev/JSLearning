
let personalDetails= {
    fullName : "shubham sanap",
    graduation: "Btech in ME",
    bankAccount: "Bank Of India",
    accountNum: "150710110016547",
    aadharNum : "987654321101"
}

let collegeDetails={
    collegeName : "SBGI, Miraj",
    course : "Mechanical Engineering",
    graduationYear: 2021,
    cgpa: 7.94,
}

let allDetails = Object.assign({},personalDetails,collegeDetails);
console.table(`My name is ${allDetails.fullName}, i completed my ${allDetails.graduation} i'm having bank account in ${allDetails.bankAccount} with number ${allDetails.accountNum} and linked with 
Aadhar number ${allDetails.aadharNum}, i've done my btech at ${allDetails.collegeName} course name is ${allDetails.course}.  `);

//freeze method

let array = ["ramesh","kanad","aakash","mayur","rohit"];
Object.freeze(array);

for (const element of array) {
    console.log(element);
}

//reverse the string

let compnay = "Codemind Technology";
let word = compnay.split(" ");
word = word[1].split("").reverse().join("");
console.log(word);



