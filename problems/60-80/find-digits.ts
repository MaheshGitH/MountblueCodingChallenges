function findDigits(n: number): number {
  let count = 0;
  for (let i = 0; i < n.toString().length; i++) {
    if (n % Number(n.toString()[i]) === 0) {
      count++;
    }
  }
  return count;
}
console.log(findDigits(1012));
