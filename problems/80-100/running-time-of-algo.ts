function runningTime(arr: number[]): number {
  let shiftCount = 0;
  const n = arr.length;
  let i = 1;
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    const value = arr[i];
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;

      shiftCount++;
    }
    arr[j + 1] = value;
  }

  return shiftCount;
}

console.log(runningTime([2, 1, 3, 1, 2]));
