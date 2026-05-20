/*
s = 'abcabc'
p = ''
count = 0
for loop -> {
  if(p.includes(s[i])) {
    continue
  }
  count++
} 
*/

function stringConstruction(s: string): number {
  let p: string[] = [];
  let count = 0;
  for (const char of s) {
    if (p.includes(char)) {
      continue;
    }
    p.push(char);
    count++;
  }
  return count;
}

console.log(stringConstruction("abab"));
