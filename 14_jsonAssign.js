

let detailsStr = `{
    "name": "Aleix Melon",
    "id" : "E00245",
    "role": ["Dev", "DBA"],
    "AGE": 23,
    "DOJ": "11-12-2019",
    "married": false,
    "address": {
        "street": "30,Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`


const details = JSON.parse(detailsStr); 

console.log(`the role is: ${details.role[0]}`);//print only dev

let lastName = Object.values(details)[0]; //print only melon
lastName = lastName.split(" ");
console.log(`last name is: ${lastName[1]}`);

let year = Object.values(details)[4];//print only 2019
year = year.split('-');
console.log(`joining year is: ${year[2]}`);


//program to check the number is prime or not

function isprime(num){
    if (num<2) {
        return `${num} is not prime number`;
    }
    for (let i = 2; i < num; i++) {
        if (num%i==0) {
            return `${num} is not a prime number`;
        }
         
        
    }
    return `${num} is prime number`;
}
console.log(isprime(1));
console.log(isprime(11));
console.log(isprime(-9));
console.log(isprime(4));