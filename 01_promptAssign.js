var math = parseFloat(prompt('Enter math marks') || '0');
console.log('Enter math marks: ' + math);
var physics = parseFloat(prompt('Enter physics marks') || '0');
console.log('Enter physics marks: ' + physics);
var chem = parseFloat(prompt('Enter chemestry msrks') || '0');
console.log('Enter chemestry msrks: ' + chem);
var result = (math + physics + chem) / 3;
console.log('Average of three subject is: ', result);
if (result < 70) {
    console.log('your grade is C');
}
else {
    if (result > 70 && result < 90) {
        console.log('your grade is B');
    }
    else {
        if (result > 90) {
            console.log('your grade is A');
        }
    }
}
