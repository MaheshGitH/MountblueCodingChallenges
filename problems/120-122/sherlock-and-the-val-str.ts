function isValid(s: string): string {
  const countOccurrence = new Map<string, number>();
  let max = 0;
  for (const char of s) {
    countOccurrence.set(
      char,
      countOccurrence.get(char) ? countOccurrence.get(char) + 1 : 1,
    );
    if (countOccurrence.get(char) > max) {
      max = countOccurrence.get(char);
    }
  }

  const freqs = [...countOccurrence.values()];
  freqs.sort((a, b) => a - b);
  console.log(freqs);
  let maxCount = 1;
  let currentCount = 1;
  let mostFreq = 0;
  for (let i = 1; i < freqs.length; i++) {
    if (freqs[i] === freqs[i - 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }
    if (currentCount > maxCount) {
      maxCount = currentCount;
      mostFreq = freqs[i];
    }
  }
  console.log(mostFreq);
  const value = max - mostFreq;
  let expected = 0;
  if (value === 0) {
    expected = max - 1;
  } else if (value === 1) {
    expected = max;
  } else {
    return "NO";
  }

  for (const fre of freqs) {
    if (fre === expected) {
      expected = mostFreq;
      continue;
    }
    if (fre !== mostFreq) {
      return "NO";
    }
  }

  return "YES";
}

console.log(isValid("aaaabbcccccc"));
