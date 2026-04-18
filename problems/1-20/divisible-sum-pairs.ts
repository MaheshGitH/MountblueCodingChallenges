/*

ar = [1, 2, 3, 4, 5, 6]
result = 0
k = 5

for loop -> {
  for loop -> {
    if(ar[i] < ar[j] && (ar[i] + ar[j]) % k === 0) {
      result++
    }
  }
}
return result
*/

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let result = 0;
  for (let i = 0; i <= ar.length - 1; i++) {
    for (let j = 0; j <= ar.length - 1; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        result++;
      }
    }
  }
  return result;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));

//Time complexity: O(n^2)
