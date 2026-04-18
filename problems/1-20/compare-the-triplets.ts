function compareTriplets(a: number[], b: number[]): number[] {
  let alice = 0,
    bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alice++;
    else if (a[i] < b[i]) bob++;
  }
  return [alice, bob];
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

//Time complexity: O(1) (Technically)
