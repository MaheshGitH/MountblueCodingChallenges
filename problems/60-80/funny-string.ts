function funnyString(s: string): string {
  const reverse = [];
  const straight = [];
  let n = s.length;
  let index = n - 2;
  for (let i = 1; i < n; i++) {
    const firstAsciiValue = s[i - 1].charCodeAt(0);
    const secondAsciiValue = s[i].charCodeAt(0);
    straight.push(Math.abs(firstAsciiValue - secondAsciiValue));
    reverse[index] = Math.abs(firstAsciiValue - secondAsciiValue);

    index--;
  }
  console.log(straight.join(""));
  console.log(reverse.join(""));
  if (straight.join("") === reverse.join("")) {
    return "Funny";
  }
  return "Not Funny";
}

console.log(funnyString("bcxz"));
