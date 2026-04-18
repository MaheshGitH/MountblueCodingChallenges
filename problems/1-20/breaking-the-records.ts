function breakingRecords(scores: number[]): number[] {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  const count = [0, 0];
  for (const score of scores) {
    if (score > highestScore) {
      count[0] += 1;
      highestScore = score;
    } else if (score < lowestScore) {
      count[1] += 1;
      lowestScore = score;
    }
  }
  return count;
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

//Time complexity: O(n)
