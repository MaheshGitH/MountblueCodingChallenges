/*
s = "bcbc"
n = s.length
index = -1
for loop -> {
  if(s[i] !== n) {
    index = i
    return
  }
}
*/

// helper
function palindrome(s: string) {
  const n = Math.floor(s.length / 2);
  let fromLast = s.length - 1;
  for (let i = 0; i < n; i++) {
    if (s[i] === s[fromLast]) {
      fromLast--;
    } else {
      return false;
    }
  }
  return true;
}

function palindromeIndex(s: string): number {
  const n = Math.floor(s.length / 2);
  let fromLast = s.length - 1;
  if (palindrome(s)) return -1;
  for (let i = 0; i < n; i++) {
    if (s[i] !== s[fromLast]) {
      if (palindrome(s.slice(0, i) + s.slice(i + 1))) {
        return i;
      } else if (palindrome(s.slice(0, fromLast) + s.slice(fromLast + 1))) {
        return fromLast;
      } else {
        return -1;
      }
    }
    fromLast--;
  }
  return -1;
}

console.log(palindromeIndex("aaa"));
