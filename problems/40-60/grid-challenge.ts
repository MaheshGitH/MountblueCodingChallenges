/*
numGrid = [
  [1, 2, 3],
  [1, 4, 5],
  [5, 6, 7],
]
  col = 0
  for loop -> {
    for loop -> {
      if(numGrid[j][i] < numGrid[j + 1][i]) {
        return "NO"
      }
    }
  }
return "YES"

*/
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function gridChallenge(grid: string[]): string {
  const numGrid: number[][] = [];
  for (let i = 0; i <= grid.length - 1; i++) {
    numGrid[i] = [];
    for (let j = 0; j <= grid[0].length - 1; j++) {
      numGrid[i][j] = alphabet.indexOf(grid[i][j]);
      if (j === grid.length - 1) {
        numGrid[i].sort((a, b) => a - b);
      }
    }
  }

  for (let i = 0; i <= numGrid.length - 1; i++) {
    for (let j = 1; j <= numGrid[0].length - 1; j++) {
      if (numGrid[j][i] < numGrid[j - 1][i]) {
        return "NO";
      }
    }
  }
  return "YES";
}

console.log(gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"]));

//Time complexity: O(n^2 log n)
