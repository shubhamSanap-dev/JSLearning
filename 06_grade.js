function gradeCalculation(marks){
    if (marks>=90 && marks<=100) {
        console.log(`Funtastic marks: ${marks}, Your grade is A+`);
    } else {
        if (marks>=75 && marks<90) {
            console.log(`Excellent marks ${marks}, your grade is A`);
        } else {
            if (marks>=55 && marks < 75) {
                console.log(`Good marks ${marks}, your grade is B`);
            } else {
                if (marks>=35 && marks<55) {
                    console.log(`marks is ${marks}, your grade is C need improvement`);
                } else {
                    if (marks<=0 || marks>100 || isNaN(marks)) {
                        console.log(`${marks} please provide the valid marks`);
                    } else {
                        console.log(`${marks} you are fail`);
                    }
                }
            }
            
        }
        
    }
}
          
        
      
    
  

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty");
gradeCalculation(undefined);
