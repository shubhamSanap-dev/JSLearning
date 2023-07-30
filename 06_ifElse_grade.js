var voteEligible = function(age){
    if (age==0 || age<0 || age>130) {
        console.log(`you inserted value ${age} is invalid data`);
    } else {
        if (age<18) {
            console.log(`your age ${age} is not eligible for vote`); 
          }
       else {
        if ((age>=18)) {
            console.log(`your age ${age} is eligible for vote`);
        }
         else {
            console.log(`${age} is invalid data`);
        }
    }
}
}

voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);