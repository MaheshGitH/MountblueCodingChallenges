function caesarCipher(s: string, k: number): string {
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

  const result = [];
  for (const ch of s) {
    const char = ch.toLowerCase();
    if (alphabet.includes(char)) {
      const index = alphabet.indexOf(char);
      const finalIndex = (index + k) % 26;
      let element = alphabet[finalIndex];
      element = ch === char.toUpperCase() ? element.toUpperCase() : element;

      result.push(element);
    } else {
      result.push(ch);
    }
  }
  return result.join("");
}
console.log(caesarCipher("middle-Outz", 2));

//Time complexity: O(n)
