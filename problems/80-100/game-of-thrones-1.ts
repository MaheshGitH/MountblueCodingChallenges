/*
s = 'aabbccdd'
countOccurence = map()
evens = 0
odds = 0
for(const [key, value] of countOccurence) {
  if(value % 2 === 0) {
    evens++
  } else {
    odds++
  }
}
if(eves % 2 === 0 && odds % 2 !== 0) {
  return "YES"
} 
  return "NO"
*/

function gameOfThrones(s: string): string {
  const countOccurence = new Map<string, number>();
  let even = 0;
  let odd = 0;
  for (const char of s) {
    countOccurence.set(
      char,
      countOccurence.get(char) ? countOccurence.get(char) + 1 : 1,
    );
  }
  for (const [key, value] of countOccurence) {
    if (value % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  if (odd === 1 && even > 0) return "YES";
  if (odd === 0 && even > 0) return "YES";
  if (even === 1 && odd === 1) return "YES";

  return "NO";
}

console.log(gameOfThrones("cdcdcdcdeeeef"));
