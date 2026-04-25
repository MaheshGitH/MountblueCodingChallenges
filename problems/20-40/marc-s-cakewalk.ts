/**
 * calorie = [5, 10, 7]
 * calorie.sort((a, b) => b - a)
 * miles = 0
 * for loop -> {
 *   miles += Math.pow(2, i) * calorie[i]
 * }
 * return miles
 *
 */

function marcsCakewalk(calorie: number[]): number {
  calorie.sort((a, b) => b - a);
  let miles = 0;
  for (let i = 0; i < calorie.length; i++) {
    miles += Math.pow(2, i) * calorie[i];
  }

  return miles;
}

console.log(marcsCakewalk([7, 4, 9, 6]));

//Time complexity: O(n)
