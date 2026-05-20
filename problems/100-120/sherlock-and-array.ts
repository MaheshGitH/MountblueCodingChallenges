function balancedSums(arr: number[]): string {
  let total = 0;
  const n = arr.length;
  for (const num of arr) {
    total += num;
  }

  let firstSum = 0;

  for (let i = 0; i < n; i++) {
    const secondSum = total - firstSum - arr[i];
    if (firstSum === secondSum) {
      return "YES";
    }
    firstSum += arr[i];
  }
  return "NO";
}

console.log(balancedSums([1, 1, 4, 1, 1]));
