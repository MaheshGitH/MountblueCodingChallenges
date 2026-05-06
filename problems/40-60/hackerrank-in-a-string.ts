/*
s = 'hereimstackerrank'
hackerRank = 'hackerrank'
index = 0
arr = []
for loop -> {
  if(s[i] === hackerRank[index]) {
    arr.push(s[i])
    if(hackerRank[index] === 'k') {
      break
    }
    index++
  }
}
if(arr.join('') === hackerRank) {
  return "YES"
} else {
  return "NO"
}
*/

function hackerrankInString(s: string): string {
  const hackerRank = "hackerrank";
  let index = 0;
  const arr = [];
  for (const char of s) {
    if (char === hackerRank[index]) {
      arr.push(char);
      if (index === 9) {
        break;
      }
      index++;
    }
  }

  if (arr.join("") === hackerRank) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"));
