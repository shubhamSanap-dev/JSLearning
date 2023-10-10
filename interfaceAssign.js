var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.wheel = function () {
        return "4 wheeler";
    };
    Car.prototype.CheckAC = function () {
        return 'AC is available';
    };
    Car.prototype.CallFacility = function () {
        return "Call Facility supported";
    };
    return Car;
}());
//for gps features
// abstract class GPS {
//     abstract GPSSupport(): boolean;
// }
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.Price = function () { return 1000000; };
    Toyota.prototype.getTotalSeats = function () { return 5; };
    Toyota.prototype.color = function () { return 'white'; };
    return Toyota;
}(Car));
var Hyundai = /** @class */ (function (_super) {
    __extends(Hyundai, _super);
    function Hyundai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GPSSupport = true;
        return _this;
        // GPS(): boolean {return true;}
        // GPSSupport(): boolean {
        //     return true;
        // }
    }
    Hyundai.prototype.Price = function () { return 900000; };
    Hyundai.prototype.getTotalSeats = function () { return 7; };
    Hyundai.prototype.color = function () { return 'gray'; };
    return Hyundai;
}(Car));
var ToyotaCar = new Toyota();
var HyundaiCar = new Hyundai();
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
console.log("====================================================================");
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
