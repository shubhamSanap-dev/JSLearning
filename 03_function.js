

function swap(n1, n2){// var n1= num1; var n2=num2; n1,n2 arguments or parameters
console.log('inside swap function');
console.log('before swap === n1', n1, 'n2',n2);
var temp=n1;
n1=n2;
n2=temp;
console.log('after swap == n1', n1, 'n2', n2);

}
var num1=100;
var num2=200;

swap(num1,num2); //funtion call or invocation