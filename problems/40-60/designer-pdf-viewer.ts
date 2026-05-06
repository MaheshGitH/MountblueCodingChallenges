function designerPdfViewer(h: number[], word: string): number {
  let heightest = 0;
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
  const wordIntoNum = [];
  for (const char of word) {
    let position = alphabet.indexOf(char);
    wordIntoNum.push(h[position]);
    if (h[position] > heightest) {
      heightest = h[position];
    }
  }
  return heightest * word.length;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5,
      5,
    ],
    "abc",
  ),
);
