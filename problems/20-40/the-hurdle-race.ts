function hurdleRace(k: number, height: number[]): number {
  let max = 0;
  for (const hgt of height) {
    if (hgt > max) max = hgt;
  }
  if (max > k) {
    return max - k;
  }
  return 0;
}

console.log(hurdleRace(3, [1, 2, 3, 4, 2]));

//Time complexity: O(n)
