/*
s = 'The quick brown fox jumps over the lazy dog'
present = []
count = 0
for loop -> {
  if(present.includes(s[i].lowerCase())) {
    continue
  } else if(alphabet.includes(s[i].lowerCase())) {
    present.push(s[i])
    count++
  }
}
if(count === 26) return "pangram"
return "not pangram"
*/

function pangrams(s: string): string {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const present = [];

  for (let char of s) {
    if (present.includes(char.toLowerCase())) {
      continue;
    } else if (alphabet.includes(char.toLowerCase())) {
      present.push(char.toLowerCase());
    }
  }

  if (present.length === 26) return "pangram";

  return "not pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the prize"));
