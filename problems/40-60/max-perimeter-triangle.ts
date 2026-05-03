/**
 * sticks = [1, 2, 3, 4, 5, 10]
 * sticks.sort()
 * realTriangle = [[]]
 * index = 0
 * for loop -> {
 *   for loop -> {
 *     if(sticks[i] + sticks[j  - 1] > sticks[j]) {
 *       if(sticks[j] + sticks[i] > sticks[j - 1]) {
 *          if(sticks[j] + sticks[j - 1] > sticks[i]) {
 *            realTriangle[index][0] = sticks[i]
 *            realTriangle[index][1] = sticks[j - 1]
 *            realTriangle[index][2] = sticks[j]
 *            index++
 *          }
 *       }
 *     } else {
 *       break
 *     }
 *   }
 * }
 * if(realTriangle.length === 0) return -1
 * return realTriangle[index]
 */

function maximumPerimeterTriangle(sticks: number[]): number[] {
  sticks.sort((a, b) => a - b);
  const realTriangle: number[][] = [];
  let index = 0;
  for (let i = 2; i < sticks.length; i++) {
    realTriangle[index] = [];
    if (sticks[i - 2] + sticks[i - 1] > sticks[i]) {
      if (sticks[i - 2] + sticks[i] > sticks[i - 1]) {
        if (sticks[i - 1] + sticks[i] > sticks[i - 2]) {
          realTriangle[index].push(sticks[i - 2]);
          realTriangle[index].push(sticks[i - 1]);
          realTriangle[index].push(sticks[i]);
          index++;
        }
      }
    }
  }
  if (index - 1 < 0) return [-1];
  return realTriangle[index - 1];
}

console.log(maximumPerimeterTriangle([1, 2, 3]));
// i - 2 ==> a
// i - 1 ==> b
// i ==> c
