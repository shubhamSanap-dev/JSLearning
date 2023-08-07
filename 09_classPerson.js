
class Student{
    constructor(fullName, rollNo, college, emailId, Mobile){
        this.fullName = fullName;
        this.rollNo = rollNo,
        this.college = college;
        this.emailId = emailId;
        this.Mobile = Mobile;
    }
    show(){
        console.log(`${this.fullName}, ${this.rollNo}, ${this.college}, ${this.emailId},${this.Mobile}`);
    }
}

let studenShubham = new Student("Shubham Sanap", 11, "Walchand college","ssanap@gmail.com","8668691480");

let StudentAakash = new Student("Aakash",87,"SBGI","Aakash@gmail.com","987546215");

const arrayStudent = [studenShubham, StudentAakash];
console.log(`Travesring array`);
for (const Student of arrayStudent) {
    Student.show();
    
}