

//sorting program in JS
let unSortArr = [4,-1,34,09,-9,103]

const sortArr = (inputArr) => {
    for(let i=0; i<inputArr.length; i++)
    {
        for(let j=i+1; j<inputArr.length; j++)
        {
            let temp = inputArr[i];
            if(inputArr[i] > inputArr[j])
            {
                inputArr[i] = inputArr[j];
                inputArr[j] = temp;
            }
        }
    }
    return inputArr;
}

console.log(sortArr(unSortArr));;