/**
 * s = 'saveChangesInTheEditor'
 * count = 1
 * for loop -> {
 *   if(s[i] === s[i].toUpperCase()) count++
 * }
 * return count
 */

function camelcase(s: string): number {
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) count++;
  }
  return count;
}

console.log(camelcase("oneTwoThree"));

//Time complexity: O(n)
