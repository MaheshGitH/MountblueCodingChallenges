/*
s = 'aba' 
n = 10
aCount = 0
for loop -> {
  if(s[i] === 'a') aCount++
}
revolution = n % s.length
multiple = Math.floor(n / s.length)
extra = 0
for loop -> {
  if(s[i] === 'a') {
    if(i <= revolution) {
       extra++
    }
  }
}
return multiple * aCount + extra
*/

function repeatedString(s: string, n: number): number {
  let aCount = 0;
  for (const char of s) {
    if (char === "a") aCount++;
  }
  const revolution = n % s.length;
  const multiple = Math.floor(n / s.length);
  let extra = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      if (i < revolution) {
        extra++;
      }
    }
  }
  return multiple * aCount + extra;
}

console.log(repeatedString("a", 10));
