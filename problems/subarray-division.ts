/*
  arr = [1, 2, 1, 3, 2]
  result = 0
  start = 0
  end = m -> 2
  while(start + end > s.length) {
    sumArr = arr.slice(start, end)
    sum = arraySum(sumArr)
    if(sum === d){
      result++
      start++
      end++
    }
    start++
    end++
  }
  return result
  

*/

//Helper function

function arraySum(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

//Main
function birthday(s: number[], d: number, m: number): number {
  let result = 0;
  let start = 0;
  let end = m;
  while (end <= s.length) {
    const sumArr = s.slice(start, end);
    const sum = arraySum(sumArr);

    if (sum === d) {
      result++;
      start++;
      end++;
    } else {
      start++;
      end++;
    }
  }
  return result;
}

console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2));
