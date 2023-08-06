// remove duplicates using for loop only
let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];

 let uniqueArr = [];
 for(let i=0; i<array.length; i++){
     if(
         uniqueArr.indexOf(array[i])== -1
     ){
         uniqueArr.push(array[i]);
    }
 }

 console.log(uniqueArr);

const evenNum=[];
for(let i=0; i<array.length; i++){
    if (array[i]%2==0) {
        evenNum.push(array[i]);
    }
}
console.log(evenNum);

let a=[4,5,6,4,5,8,5,7,8,9,7,8];
let b=[]
for(i=0;i<a.length;i++){
    for(j=0;j<a.length;j++){
        if(b.includes(a[i])){
            

            continue;
        }
        else{
            b.push(a[i])

        }

    }
}
console.log(b);