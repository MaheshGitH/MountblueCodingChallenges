function aVeryBigSum(ar: number[]): number {
  const sum = ar.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]),
);

//The challenge is originally designed for languages like Java, C, or C++

//Time complexity: O(n)
