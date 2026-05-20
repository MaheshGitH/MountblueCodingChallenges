function strangeCounter(t: number): number {
  let totalValue = 3;
  let range = 3;
  while (totalValue < t) {
    range = range * 2;
    totalValue += range;
  }
  return totalValue - t + 1;
}

console.log(strangeCounter(6));
