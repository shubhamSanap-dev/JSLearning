

function marriageEligibility (gender, age){
    if (gender=="male" && age>=21) {
        console.log(`gender: ${gender} and age: ${age} congrats your are eligible for marriage`);
    } else {
        if (gender=="female" && age>=18) {
            console.log(`gender: ${gender} and age: ${age} congrats you are eligible for marriage`);
        } else {
            console.log(`gender: ${gender} and age: ${age} you are not eligible for marriage`);
        }
        
    }
}

marriageEligibility("male",17);
marriageEligibility("male",25);
marriageEligibility("female",28);
marriageEligibility("female",16);
marriageEligibility("other",35);
marriageEligibility("other",41)