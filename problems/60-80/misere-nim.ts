function misereNim(s: number[]): string {
  let odds = 0;
  let oneS = 0;
  for (const num of s) {
    if (num === 1) {
      oneS++;
      continue;
    }
    if (num % 2 !== 0) {
      odds++;
    }
  }

  if (oneS === s.length) {
    return s.length % 2 === 0 ? "First" : "Second";
  }
  let nim = 0;
  for (const num of s) {
    nim ^= num;
  }
  return nim === 0 ? "Second" : "First";
}

console.log(misereNim([2, 1, 3]));
