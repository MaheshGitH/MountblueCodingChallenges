// even move -->  ANDY
// odd move --> BOB
// [5, 2, 6, 3, 4]

function gamingArray(arr: number[]): string {
  let max = Math.max(...arr);
  let n = arr.indexOf(max);
  let move = 1;
  while (arr.indexOf(max) !== 0) {
    max = 0;
    let index = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] === max) {
        continue;
      }
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }
    n = index;
    move++;
  }

  return move % 2 === 0 ? "ANDY" : "BOB";
}

console.log(gamingArray([1, 3, 5, 7, 9]));
