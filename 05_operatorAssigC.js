console.log("========================step 1 =============================================================================");

var eligibility =  function(gradScore, hscScore, sscScore, candidateName){
    var result = gradScore >= 70 || hscScore>=80 || sscScore>90 ? `Congrats ${candidateName} you are eligible for TCS interview` : `Dear ${candidateName} Unfortunately you are not eligible for interview`
    console.log(result);
}

eligibility(80,86,90,"shubham");
eligibility(70,65,55,"ramesh");
eligibility(60,79,88,"aakash");

console.log("========================step 2 =============================================================================");

function maleMarriageEligibility(gender, age, boyName){
    var res = gender="male" && age>=21 ? `Hey ${boyName} you are eligible for marriage` :  `${boyName} you are not eligible for marriage`;
    console.log(res);
}
maleMarriageEligibility("male", 25, "Bill G");
maleMarriageEligibility("male", 17, "Steve J");

console.log("========================step 3 =============================================================================");

function femaleMarriageEligibility(gender, age, girlName){
    var result = gender="female" && age>=19 ? `Hey ${girlName} you are eligible for Marriage` : `${girlName} you are not eligible for marriege`;
    console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda G");

