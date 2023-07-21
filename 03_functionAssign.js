console.log('-------------first step--------------------------------------');
function show(){
    console.log('function with no arguments and no return type one');
    console.log('function with no arguments and no return type two');
}
show();

console.log('-------------second step--------------------------------------');

function personalDetails(firstName, Lastname, collegeName){
    console.log(' first name:', firstName, ' last name:', Lastname, ' college name:',collegeName);
}
personalDetails('shubham', 'sanap', 'SBGI');

console.log('-------------third step--------------------------------------');

function swapValues(arg1, arg2){
console.log('before swap====> ', arg1, arg2);
var temp=arg1;
arg1=arg2;
console.log('after swap===> ',arg1, temp);

}
swapValues('virat', 'anuksha');
swapValues('1000', '2000');

console.log('-------------fourth step--------------------------------------');

function addThreeValues(val1, val2, val3){
    console.log('values are===> ', val1, val2, val3);
    var final= val1+val2+val3;
    return final;

}

var res1 = addThreeValues('10.23', '600', '40');
console.log('addition is===>',res1);

var res2 = addThreeValues('hello','good','morning')
console.log('addition is===>', res2);

console.log('-------------fifth step--------------------------------------');

function bankDetails(bankName, accountNum, location, pinCode){
   console.log('Your bank name:',bankName,'   account number:',accountNum,'   lication:',location,'   pin code', pinCode); 
}
bankDetails('CITI Bank','3456783245','Pune','431202')
bankDetails('Axis  Bank','7856783245','Mumbai','441202')
bankDetails('HDFC Bank','8956783245','Pune', 'Open')









