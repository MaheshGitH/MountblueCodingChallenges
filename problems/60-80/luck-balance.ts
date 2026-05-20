/*
k = 3
contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]
importantContests = []
luckBalance = 0

for loop -> {
  if(contests[i][1] === 0) {
    luckBalance += contests[i][0]
  } else {
    importantContests.push(contests[i][0])
  }
}
importantContests.sort((a, b) => b - a)
luckContest = importantContests.splice(0, 3).reduce((acc, curr) => acc + curr, 0);
luckMinus = importantContest.reduce((acc, curr) => acc + curr, 0)

luckBalance += luckContest - luckMinus
return luckBalance
*/

function luckBalance(k: number, contests: number[][]): number {
  const importantContest = [];
  let luckBalance = 0;
  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      luckBalance += contests[i][0];
    } else {
      importantContest.push(contests[i][0]);
    }
  }
  importantContest.sort((a, b) => b - a);
  const luckContest = importantContest
    .splice(0, k)
    .reduce((acc, curr) => acc + curr, 0);
  const luckMinus = importantContest.reduce((acc, curr) => acc + curr, 0);
  luckBalance += luckContest - luckMinus;
  return luckBalance;
}

console.log(
  luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ]),
);
