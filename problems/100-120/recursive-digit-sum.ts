function reduceDigit(s: string): string {
  let result = 0;
  for (const char of s) {
    result += Number(char);
  }
  return result.toString();
}

function superDigit(n: string, k: number): number {
  while (n.length !== 1) {
    n = reduceDigit(n);
  }
  let result = String(Number(n) * k);
  if (result.length === 1) {
    return Number(result);
  }
  while (result.length !== 1) {
    result = reduceDigit(String(result));
  }

  return Number(result);
}

console.log(superDigit("9875", 4));
