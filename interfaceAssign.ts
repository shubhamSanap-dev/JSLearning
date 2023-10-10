abstract class Car {
    wheel(): string {
        return `4 wheeler`;
    }
    CheckAC(): string {
        return 'AC is available';
    }
    CallFacility(): string {
        return "Call Facility supported"
    }
    // GPSFeature():string{
    //     return "GPS is Supported"
    // }
    abstract Price(): number;
    abstract getTotalSeats(): number;
    abstract color(): string;
    // abstract GPS():boolean;
}

interface GPS {
    GPSSupport: Boolean;
}

//for gps features
// abstract class GPS {
//     abstract GPSSupport(): boolean;
// }

class Toyota extends Car {
    Price(): number { return 1000000; }
    getTotalSeats(): number { return 5; }
    color(): string {return  'white';}
    // GPS(): boolean {return false;}
}

class Hyundai extends Car implements GPS {
    GPSSupport: Boolean=true;
    Price(): number { return 900000; }
    getTotalSeats(): number { return 7; }
    color(): string {return  'gray';}
    
    // GPS(): boolean {return true;}


    // GPSSupport(): boolean {
    //     return true;
    // }
}



const ToyotaCar = new Toyota();
const HyundaiCar = new Hyundai();

console.log("FeaturesDetails of : Toyota");
console.log("Car  is:", ToyotaCar.wheel());
console.log("AC  is:", ToyotaCar.CheckAC());
console.log("Call Facility :", ToyotaCar.CallFacility());
console.log("Car Price is:", ToyotaCar.Price());
console.log("Total Seats:", ToyotaCar.getTotalSeats());
console.log("Color:", ToyotaCar.color());
// console.log("GPS Features Supported:", ToyotaCar.GPS()); // true
// console.error(`GPS Feature is not supported in Toyota cars`);

// console.log("GPS Features Supported:", ToyotaCar instanceof GPS); // false
console.log(`====================================================================`);

console.log("\nFeaturesDetails of : Hyundai");
console.log("Car  is:", HyundaiCar.wheel());
console.log("AC  is:", HyundaiCar.CheckAC());
console.log("Call Facility :", HyundaiCar.CallFacility());
console.log("Car Price is:", HyundaiCar.Price());
console.log("Total Seats:", HyundaiCar.getTotalSeats());
console.log("Color:", HyundaiCar.color());
console.log("GPS Features Supported:", HyundaiCar.GPSSupport);
// console.log("GPS Features Supported:", HyundaiCar.GPSSupport()); // true
// console.log("GPS Features Supported:", HyundaiCar.GPSFeature()); // true
// console.log("GPS Features Supported:", HyundaiCar.GPS()); // true