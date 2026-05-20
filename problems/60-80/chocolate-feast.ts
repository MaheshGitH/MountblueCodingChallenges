/*
n = 15
c = 3
m = 2
totalBars = n / c -- 15 / 3
wrappers = totalBars
while (wrappers >= m) {
  wrappers = wrappers - m + 1
  totalBars++
}
return totalBars

*/

function chocolateFeast(n: number, c: number, m: number): number {
  let totalBars = Math.floor(n / c);
  let wrappers = totalBars;
  while (wrappers >= m) {
    wrappers = wrappers - m + 1;
    totalBars++;
  }
  return totalBars;
}

console.log(chocolateFeast(7, 3, 2));
