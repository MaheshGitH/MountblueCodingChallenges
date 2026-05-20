function maxMin(k: number, arr: number[]): number {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[k - 1 + i] - arr[i];
    if (value < min) {
      min = value;
    }
    if (i + k === arr.length) {
      break;
    }
  }

  return min;
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]));
