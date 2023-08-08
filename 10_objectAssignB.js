let bankSbi={
    bankName:"SBI",
    bankType:"govt",
    bankIfscCode:"SBI098712",
    bankNumber:12145667

}
let bankLocation={
    street:"wakad",
    city:"Pune",
    pincode:12345
}
let bankDetails = Object.assign({} , bankLocation); // Deep Clone


console.log(`Details: ${bankDetails.street} `);

let bankDetails2 = {...bankSbi} // Shallow Clone



console.log(bankDetails2);

let rateOfInterest={
    homeLoanInterest:9.7,
    personalLoanInterest:9.1,
    dueInterest:8.1
}

let mergeAllObject=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`I have account in ${mergeAllObject.bankName} and it is ${mergeAllObject.bankType}.Location  of the bank is  ${mergeAllObject.street} ,${mergeAllObject.City}-${mergeAllObject.pincode} from ${mergeAllObject.collegeName}  and currently i am working in ${mergeAllObject.Company}. And the Rate of Interest of the bank are as follows  ${ mergeAllObject.homeLoanInterest}  ,${mergeAllObject.personalLoanInterest}  , ${mergeAllObject.dueInterest}`);

console.log("===============Travesring the merge Object=========");

for (const key in mergeAllObject) {
    if (Object.hasOwnProperty.call(mergeAllObject, key)) {
        const element = mergeAllObject[key];
        console.log(`${key}-->${element}`);       
        
        
    }
}