
let sbiBank = {
    bankName: "State Bank of India",
    location: "Sangli",
    accountNum: 98765432154,
    ifscNum: "SBI0007584",
    interestRate: "7.1%",
    showDetails: function(){
        console.log(`Bank Name: ${this.bankName},   Location: ${this.location},   Account Number: ${this.accountNum},   IFSC Code: ${this.ifscNum},   Interest Rate: ${this.interestRate}`);
    }
}

let axisBank = {
    bankName: "Axis Bank",
    location: "Pune",
    accountNum: 24765432154,
    ifscNum: "AXS0007584",
    interestRate: "6.1%",
    showDetails: function(){
        console.log(`Bank Name: ${this.bankName},   Location: ${this.location},   Account Number: ${this.accountNum},   IFSC Code: ${this.ifscNum},   Interest Rate: ${this.interestRate}`);
    }
}

let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Sangli",
    accountNum: 78765432154,
    ifscNum: "HDFC0007584",
    interestRate: "6.8%",
    showDetails: function(){
        console.log(`Bank Name: ${this.bankName},   Location: ${this.location},   Account Number: ${this.accountNum},   IFSC Code: ${this.ifscNum},   Interest Rate: ${this.interestRate}`);
    }
}

let yesBank = {
    bankName: "YES Bank",
    location: "Kolhapur",
    accountNum: 98765432154,
    ifscNum: "YES0007584",
    interestRate: "6.1%",
    showDetails: function(){
        console.log(`Bank Name: ${this.bankName},   Location: ${this.location},   Account Number: ${this.accountNum},   IFSC Code: ${this.ifscNum},   Interest Rate: ${this.interestRate}`);
    }
}


//invoked all showDetails function
sbiBank.showDetails();
axisBank.showDetails();
yesBank.showDetails();
hdfcBank.showDetails();
