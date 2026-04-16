/*
  arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]
  leftToRight = 0
  rightToLeft = arr.length - 1
  sum = [0, 0]
  for loop --> {
    sum[0] += arr[leftToRight] 
    sum[0] += arr[rightToLeft]
    leftToRight++
    rightToLeft--
  }
  return sum[0] - sum[1]
*/

function diagonalDifference(arr: number[][]): number {
  let leftToRight = 0;
  let rightToLeft = arr.length - 1;
  const sum = [0, 0];
  for (const ar of arr) {
    sum[0] += ar[leftToRight];
    sum[1] += ar[rightToLeft];
    leftToRight++;
    rightToLeft--;
  }
  return Math.abs(sum[0] - sum[1]);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ]),
);

//Time complexity: O(n)
