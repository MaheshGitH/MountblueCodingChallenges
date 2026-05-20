function twoArrays(k: number, A: number[], B: number[]): string {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  const n = A.length;
  for (let i = 0; i < n; i++) {
    if (A[i] + B[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]));
