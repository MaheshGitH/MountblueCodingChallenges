function plusMinus(arr: number[]): void {
  let positiveCount = 0,
    negativeCount = 0,
    zeroCount = 0;

  for (const num of arr) {
    if (num === 0) {
      zeroCount++;
    } else if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    }
  }
  const n = arr.length;
  console.log((positiveCount / n).toFixed(6));
  console.log((negativeCount / n).toFixed(6));
  console.log((zeroCount / n).toFixed(6));
}

plusMinus([-1, -1, 0, 1, 1]);

//Time complexity: O(n)
