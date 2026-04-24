/**
 * multiple = 2
 * totalLikes = 2
 * if(n === 1) return totalLikes
 * for loop -> {
 *   multiple = (multiple * 3) / 2
 *   totalLikes += multiple
 * }
 * return totalLikes
 */

function viralAdvertising(n: number): number {
  let multiple = 2;
  let totalLikes = 2;
  if (n === 1) return totalLikes;
  for (let i = 1; i < n; i++) {
    multiple = Math.floor((multiple * 3) / 2);
    totalLikes += multiple;
  }
  return totalLikes;
}

console.log(viralAdvertising(1));

//Time complexity: O(n)
