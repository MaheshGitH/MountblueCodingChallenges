/*
s = 'AABAAB'
expected = s[0]
deletionCount = 0
for loop -> {
  if(s[i] === expected) {
    expected = expected === "A" ? "B" : "A"
    continue
  } else {
    deletionCount++
  }
}
return deletionCount
*/

function alternatingCharacters(s: string): number {
  let expected = s[0];
  let deletionCount = 0;
  for (let char of s) {
    if (char === expected) {
      expected = expected === "A" ? "B" : "A";
      continue;
    } else {
      deletionCount++;
    }
  }
  return deletionCount;
}

console.log(alternatingCharacters("AAABBB"));
