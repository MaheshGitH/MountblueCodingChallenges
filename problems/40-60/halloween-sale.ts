/**
 * p = 20
 * d = 3
 * m = 6
 * s = 70
 * totalPrice = p
 * gamesCount = 0
 * while(totalPrice < s) {
 *   if(p - d <= m) {
 *      p = m
 *   }
 *   if(p === m) {
 *      gamesCount++
 *      totalPrice += p
 *   } else {
 *      gamesCount++
 *      totalPrice += p - d
 *   }
 *}
 *
 */

function howManyGames(p: number, d: number, m: number, s: number): number {
  let gameCount = 0;
  let totalPrice = p;
  while (totalPrice <= s) {
    if (p - d <= m) {
      p = m;
    }
    if (p === m) {
      gameCount++;
      totalPrice += p;
    } else {
      gameCount++;
      totalPrice += p - d;
      p -= d;
    }
  }
  return gameCount;
}

console.log(howManyGames(20, 3, 6, 85));
