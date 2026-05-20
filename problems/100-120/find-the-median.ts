function findMedian(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const middle = n / 2;

  return arr[middle - 0.5];
}

console.log(findMedian([1, 2, 3, 4, 5]));
