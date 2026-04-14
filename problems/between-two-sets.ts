//Helper functions

function getGcd(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

function getLcm(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / getGcd(a, b);
}

//Main

function getTotalX(a: number[], b: number[]): number {
  let result = 0;
  const lcm = a.reduce(getLcm);
  const gcd = b.reduce(getGcd);
  let multiple = 0;
  while (multiple <= gcd) {
    multiple += lcm;
    if (gcd % multiple === 0) {
      result++;
    }
  }
  return result;
}

console.log(getTotalX([2, 4], [16, 32, 96]));

//Time complexity: O((n + m) * log M)
