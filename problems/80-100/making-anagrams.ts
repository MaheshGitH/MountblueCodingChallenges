function countOccurrence(s: string) {
  const occurrence = new Map();
  for (const char of s) {
    occurrence.set(char, occurrence.get(char) ? occurrence.get(char) + 1 : 1);
  }
  return occurrence;
}

function makingAnagrams(s1: string, s2: string): number {
  let common = 0;
  const n1 = s1.length;
  const n2 = s2.length;
  const occurrence1 = countOccurrence(s1);
  const occurrence2 = countOccurrence(s2);

  const s2key = [...occurrence2.keys()];
  for (const [key, value] of occurrence1) {
    if (s2key.includes(key)) {
      const count2 = occurrence2.get(key);

      if (value === count2) {
        common += value;
        continue;
      } else if (value < count2) {
        common += value;
        continue;
      }
      common += count2;
    }
  }

  const uncommon1 = n1 - common;
  const uncommon2 = n2 - common;
  return uncommon1 + uncommon2;
}

console.log(makingAnagrams("cde", "abc"));
