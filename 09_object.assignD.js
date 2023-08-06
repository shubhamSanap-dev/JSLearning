
let professor = {
    name:"Mr. john walker",
    mobileNumber:"8668691488",
    state:"Maharashtra",
    collageName:"COEP",
    subject:undefined,
    degrees : {
        engineering:"CSE",
        PHD:"Adv computing",
        year:1998,
        experince:"20 years",
        teacherDegrees: function(){
            console.log(`All degrees: ${this.engineering}, ${this.PHD}, ${this.year},${this.experince}`);
        }
    },
    certificates : ["Hacker Rank","Participation","Crtificate in Adv Programming"]
    
}

//invoked teacherDegrees funciton
professor.degrees.teacherDegrees();

//added new element to object
professor.totalExperince = "14 years";
console.log(professor.totalExperince);

//modified the subject value
professor.subject = "JavaScript";
console.log(professor);

//added new element to array
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);


//log the last value in array
console.log(professor.certificates[professor.certificates.length-1]);