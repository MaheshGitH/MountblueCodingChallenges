function minimumAbsoluteDifference(arr: number[]): number {
  arr.sort((a, b) => a - b);
  let min = Math.abs(arr[1] - arr[0]);
  for (let i = 0; i < arr.length - 1; i++) {
    const difference = Math.abs(arr[i + 1] - arr[i]);
    if (difference < min) {
      min = difference;
    }
  }
  return min;
}

console.log(minimumAbsoluteDifference([3, -7, 0]));

//Time complexity: O(n)
