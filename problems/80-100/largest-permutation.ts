/*
k = 1
arr = [4, 2, 3, 5, 1]
numPosition = map()
for loop -> {
  numPosition.set(arr[i], i)
}

for loop -> {
  if(k === 0) break
  correctValue = n - i   5
  currentValue = arr[i]  4
  if(correctValue === currentValue) { 
    continue
  }
  corrValPos = numPosition.get(correctValue)
  arr[i] = correctValue
  arr[corrValPos] = currentValue
  k--
}
*/

function largestPermutation(k: number, arr: number[]): number[] {
  const numPosition = new Map<number, number>();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    numPosition.set(arr[i], i);
  }
  console.log(numPosition);
  for (let i = 0; i < n; i++) {
    if (k === 0) break;
    const correctValue = n - i;
    const currentValue = arr[i];
    if (correctValue === currentValue) {
      continue;
    }
    const corrValPos = numPosition.get(correctValue);
    numPosition.set(arr[i], corrValPos);
    numPosition.set(correctValue, i);
    arr[i] = correctValue;
    arr[corrValPos] = currentValue;
    k--;
  }
  return arr;
}

console.log(largestPermutation(2, [2, 1, 3]));
