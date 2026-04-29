// queries = [1, 2]
// k = 2
// [1, 2, 3, 4, 5]  -> [4, 5, 1, 2, 3]
// ar[1] = 5
// ar[2] = 1
//Formula (q - k + n) % n

function circularArrayRotation(
  a: number[],
  k: number,
  queries: number[],
): number[] {
  const final = [];
  for (const num of queries) {
    final.push(a[(num - k + a.length) % a.length]);
  }
  return final;
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
