/*
width = [2, 3, 1, 2, 3, 2, 3, 3]
cases = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]
min = Math.max(...width)
result = []
for loop -> {
  for loop(j = cases[i][0]; j <= cases[i][1]; j++) ->{
    if(width[j] < min) {
      min = width[j]
    }
    if(cases[i][1] === j) {
      result.push(min)
      min = Math.max(...width)
    }
  }
}
return result
*/

function serviceLane(n: number, width: number[], cases: number[][]): number[] {
  const result = [];
  for (let i = 0; i < cases.length; i++) {
    let min = Infinity;
    for (let j = cases[i][0]; j <= cases[i][1]; j++) {
      if (width[j] < min) {
        min = width[j];
      }
    }
    result.push(min);
  }
  return result;
}

console.log(
  serviceLane(
    8,
    [2, 3, 1, 2, 3, 2, 3, 3],
    [
      [0, 3],
      [4, 6],
      [6, 7],
      [3, 5],
      [0, 7],
    ],
  ),
);
