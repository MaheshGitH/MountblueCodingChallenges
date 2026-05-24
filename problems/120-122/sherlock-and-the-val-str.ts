/*
s = "aaaabbcccccc"
arr = [4, 2, 6]
firstNum = arr[0]
expected = firstNum + 1 | 1 
for loop -> {
  if(arr[i] === firstNum) {
    continue
  }
  if(arr[i] === expected) {
    expected = firstNum
    continue
  }
  return "NO"
}
return "YES"
*/

function isValid(s: string): string {
  const countOccurrence = new Map<string, number>();
  for (const char of s) {
    countOccurrence.set(
      char,
      countOccurrence.get(char) ? countOccurrence.get(char) + 1 : 1,
    );
  }

  const freqs = [...countOccurrence.values()];

  const firstNum = freqs[0];
  let expected = firstNum;
  let hasPass = true;
  for (const freq of freqs) {
    if (freq === firstNum) {
      continue;
    }
    if (hasPass) {
      if (freq === expected + 1 || freq === expected - 1 || freq === 1) {
        expected = firstNum;
      }
      hasPass = false;
      continue;
    }

    return "NO";
  }

  return "YES";
}

console.log(isValid("aabbcd"));
