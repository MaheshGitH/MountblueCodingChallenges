function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  const ranks = [];
  const scores = [...new Set(ranked)];
  let i = scores.length - 1;
  for (const play of player) {
    while (i >= 0 && play >= scores[i]) {
      i--;
    }
    ranks.push(i + 2);
  }
  return ranks;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]),
);
