/**
 * s = 'cde'
 * n = s.length - 1
 * counter = 0
 * for loop -> {
 *   fromFront = alphabets.indexOf(s[i]) // 2
 *   fromBack = alphabets.indexOf(s[n - i]) // 4
 *   counter += Math.abs(fromFront - fromBack)
 * }
 * return counter
 */

function theLoveLetterMystery(s: string): number {
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
  const n = s.length;
  let counter = 0;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    const fromFront = alphabet.indexOf(s[i]);
    const fromBack = alphabet.indexOf(s[n - 1 - i]);
    counter += Math.abs(fromBack - fromFront);
  }
  return counter;
}

console.log(theLoveLetterMystery("abcba"));
