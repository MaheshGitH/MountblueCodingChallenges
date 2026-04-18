/* 
  arr = [1, 3, 5, 7, 9]
  min = arr[0]
  max = arr[0]
  total = 0
  for loop -> {
    if(arr[i] < min) {
      min = arr[i]
    } else if(arr[i] > max) {
      max = arr[i]
    }
    total += arr[i]
  }
  console.log(total - max, total - min)
*/

function miniMaxSum(arr: number[]): void {
  let min = arr[0];
  let max = arr[0];
  let total = 0;
  for (const num of arr) {
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
    total += num;
  }
  console.log(total - max, total - min);
}

miniMaxSum([1, 2, 3, 4, 5]);

//Time complexity: O(n)
