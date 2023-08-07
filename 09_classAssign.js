
class Vehicle  {
    constructor(companyName, type, model, price, mileage ){
        this.companyName = companyName;
        this.type = type;
        this.model = model;
        this.price = price;
        this.mileage = mileage;
    }
}

let firstVehicle = new Vehicle("TATA MOTORS", "Four wheeler","Punch","600000/-", 20);
let secondVehicle = new Vehicle("TATA MOTORS", "Fur Wheel", "Harrier","1500000/-", 15);
let thirdVehicle =new Vehicle("Mahindra", "Four wheel", "THAR", "2500000", 12);
let fourthVecile = new Vehicle("Mahindra", "Four Wheel", "Scorpio", "2000000",10);
let fifthVehicle = new Vehicle("FORD", "Four wheel", "Envdevour", "2900000",12);


const array = [firstVehicle, secondVehicle, thirdVehicle, fourthVecile, fifthVehicle];
console.log("Traversing Array");
for (const Vehicle of array) {
    console.log(`Vehicle company name is ${Vehicle.companyName}, vehicle type is ${Vehicle.type} & model name is ${Vehicle.model} mileage is ${Vehicle.mileage} price is ${Vehicle.price}`);
}

console.log("==========================================================");


//college class

class College {
    constructor(studentName, collegeName, course, rollNum, location){
        this.studentName=studentName;
        this.collegeName=collegeName;
        this.course=course;
        this.rollNum=rollNum;
        this.location=location;
    }
    display(){
        console.log(`student name: ${this.studentName},  college name: ${this.collegeName}, course: ${this.course}, roll number: ${this.rollNum}, location: ${this.location}`);
    }
}

let firstCollege = new College("Shubham S.","WCE","ME", 221, "Sangli");
let secondCollege = new College("Kanad", "SBGI", "ME", 225, "Miraj");
let thirdCollege = new College("Rohit M.", "JSPM", "ECE", 5511, "Pune");
let fourthCollege = new College("Ramesh d.","PVPIT", "CSE", 987, "Sangli");

firstCollege.display();
secondCollege.display();
thirdCollege.display();
fourthCollege.display();

console.log("==========================================================");

function traverseObject(arg){
        for (const key in arg){
            console.log(key + ": "+arg[key]);
        }
    }

traverseObject(firstCollege);
console.log("==========================================================");
traverseObject(secondCollege);
console.log("==========================================================");
traverseObject(thirdCollege);
console.log("==========================================================");
traverseObject(fourthCollege);



