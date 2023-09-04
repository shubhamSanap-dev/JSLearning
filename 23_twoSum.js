
//two sum problem by unsing map more optimised

function twoSum(nums, target) {
    let newNums = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (newNums.has(target - nums[i])) {
        return [newNums.get(target - nums[i]), i];
      }
      newNums.set(nums[i], i);
    }
    
  }
  
  let answr = twoSum([2, 7, 11, 15], 9);
  
console.log(answr);

//two sum problem by using nested for loop

function twoSum2 (array, goal){
  let finalResult = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i]+array[j]==goal) {
        finalResult.push(i);
        finalResult.push(j)
      }  
    }
    
  }
  return finalResult
}

let answr2 = twoSum2([2, 7, 11, 15], 9);
  
console.log(answr2);