/* 
  arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
  result = [0, 0, 0, 0, 0]
  maxNum = 0
  for loop -> {
    if(num === 1) {
      if(result[0] >= maxNum) maxNum++
      result[0]++
    } else if(num === 2) {
       if(result[1] >= maxNum) maxNum++
       result[1]++
    } ...
  } --> result = [2, 2, 3, 3, 1]
  finalResult = []
  for loop -> {
    if(maxNum === result[i]) finalResult.push[i]
  }
  return finalResult[0]
  
*/

function migratoryBirds(arr: number[]): number {
  const result = [0, 0, 0, 0, 0];
  let maxNum = 0;
  for (const num of arr) {
    if (num === 1) {
      if (result[0] >= maxNum) maxNum++;
      result[0]++;
    } else if (num === 2) {
      if (result[1] >= maxNum) maxNum++;
      result[1]++;
    } else if (num === 3) {
      if (result[2] >= maxNum) maxNum++;
      result[2]++;
    } else if (num === 4) {
      if (result[3] >= maxNum) maxNum++;
      result[3]++;
    } else if (num === 5) {
      if (result[4] >= maxNum) maxNum++;
      result[4]++;
    }
  }
  const finalResult = [];
  for (let i = 0; i <= 5; i++) {
    if (maxNum === result[i]) finalResult.push(i);
  }
  return finalResult[0] + 1;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));

//Time complexity: O(n)
