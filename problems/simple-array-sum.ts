function simpleArraySum(ar: number[]): number {
  let sum = 0;
  for (const num of ar) sum += num;
  return sum;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
