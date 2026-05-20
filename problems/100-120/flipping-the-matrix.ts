// 00 -> 0 n - 1 -> n - 1 n - 1 -> n - 1 0
// 01 -> 0 n - 2 -> n - 1 n - 2 -> n - 1 1
// 10 -> 1 n - 1 -> n - 2 n - 1 -> n - 2 0
// 11 -> 1 n - 2 -> n - 2 n - 2 -> n - 2 1
/*
[ 
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
]
*/

function flippingMatrix(matrix: number[][]): number {
  const n = matrix.length;
  const m = n / 2;
  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      const value = Math.max(
        matrix[i][j],
        matrix[i][n - 1 - j],
        matrix[n - 1 - i][j],
        matrix[n - 1 - i][n - 1 - j],
      );
      result += value;
    }
  }

  return result;
}

console.log(
  flippingMatrix([
    [112, 42],
    [56, 125],
  ]),
);
