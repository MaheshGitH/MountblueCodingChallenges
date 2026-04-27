/**
 * n = 4
 * candy = 6
 * startFrom = 2
 * (candy + startFrom - 1) % n --> 3
 *
 */

function saveThePrisoner(n: number, m: number, s: number): number {
  const result = (m + s - 1) % n;
  if (result === 0) {
    return n;
  }
  return result;
}

console.log(saveThePrisoner(3, 7, 3));
