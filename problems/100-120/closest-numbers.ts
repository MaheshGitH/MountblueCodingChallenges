function closestNumbers(arr: number[]): number[] {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let pairs: number[] = [];
  let smallNum = Infinity;
  for (let i = 1; i < n; i++) {
    const firstNum = i - 1;
    const diff = arr[firstNum] - arr[i];
    if (Math.abs(diff) < smallNum) {
      pairs = [arr[firstNum], arr[i]];
      smallNum = Math.abs(diff);
    } else if (Math.abs(diff) === smallNum) {
      pairs.push(arr[firstNum], arr[i]);
    }
  }

  return pairs;
}

console.log(closestNumbers([5, 4, 3, 2]));
