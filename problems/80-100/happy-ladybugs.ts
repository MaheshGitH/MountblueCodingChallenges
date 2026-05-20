function happyLadybugs(b: string): string {
  const countOccurence = new Map<string, number>();
  let atleastOneEmpty = 0;
  for (const char of b) {
    countOccurence.set(
      char,
      countOccurence.get(char) ? countOccurence.get(char) + 1 : 1,
    );
    if (char === "_") atleastOneEmpty++;
  }
  if (atleastOneEmpty === 0) {
    for (let i = 0; i < b.length; i++) {
      const left = b[i - 1];
      const right = b[i + 1];
      if (b[i] !== left && b[i] !== right) {
        return "NO";
      }
    }
  }
  for (const [key, value] of countOccurence) {
    if (key === "_") continue;
    if (value < 2) {
      return "NO";
    }
  }
  return "YES";
}

console.log(happyLadybugs("AABB"));
