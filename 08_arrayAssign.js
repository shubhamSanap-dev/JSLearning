//step1 log first and last element
const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
 let element1 = arrayFruits[0];
 let element2 = arrayFruits[arrayFruits.length-1] 
 console.log(element1);
 console.log(element2);

 //step2 upshift papaya

 arrayFruits.unshift("Papaya");
 console.log(arrayFruits);

 //step3 remove mango

 arrayFruits.splice(4,1);
 console.log(arrayFruits);

 //step4 push pineapple

 arrayFruits.push("Pineapple");
 console.log(arrayFruits);

 //step5 add dragon fruit before watermelon

 arrayFruits.splice(4,0,"Dragon Fruit");
 console.log(arrayFruits);

 //step6 replace elemnt  orange with kiwi

 arrayFruits.splice(2, 1,"Kiwi" );
 console.log(arrayFruits);

 //log elements from 1-4

 const  myArray = arrayFruits.slice(1,4);
 console.log(myArray); 

 //log last three elements 

 const myArray2 = arrayFruits.slice(-3);
 console.log(myArray2);