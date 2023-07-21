
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

console.log("=======================================================================================");

function pass(a, b) {
    var re= a;
    a=b;
    b=re;
    console.log('a', a, 'b', b);
}
var list1= 5000;
var list2= 6000;
pass(list1, list2);