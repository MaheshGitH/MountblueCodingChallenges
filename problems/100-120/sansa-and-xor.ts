/*
arr = [3, 4, 5]
result = 0
n = arr.length

if(n % 2 === 0) {
  return 0
} 
result = arr[0]
for loop -> {
  if(i % 2 === 0) {
    result ^= arr[i]
  }
}
return result
*/

function sansaXor(arr: number[]): number {
  const n = arr.length;
  let result = 0;
  if (n % 2 === 0) {
    return 0;
  }
  result = arr[0];
  for (let i = 2; i < n; i++) {
    if (i % 2 === 0) {
      result ^= arr[i];
    }
  }
  return result;
}

console.log(sansaXor([98, 74, 12]));
