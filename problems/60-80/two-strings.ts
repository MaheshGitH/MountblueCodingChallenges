function twoStrings(s1: string, s2: string): string {
  let index = 0;
  while (index < s1.length) {
    const currentChar = s1[index];
    if (s2.includes(currentChar)) {
      return "YES";
    }
    index++;
  }
  return "NO";
}

console.log(twoStrings("hi", "world"));
