function timeInWords(h: number, m: number): string {
  const words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
    "half",
    "twenty nine",
  ];
  if (m === 1) {
    return `${words[m - 1]} minute past ${words[h - 1]}`;
  }
  if (m === 59) {
    return `${words[60 - m - 1]} minute to ${h === 12 ? words[0] : words[h]}`;
  }

  if (m === 0o0) {
    return `${words[h - 1]} o' clock`;
  }
  if (m === 15) {
    return `quarter past ${words[h - 1]}`;
  }
  if (m === 30) {
    return `half past ${words[h - 1]}`;
  }
  if (m === 45) {
    return `quarter to ${h === 12 ? words[0] : words[h]}`;
  }
  if (m >= 31) {
    return `${words[60 - m - 1]} minutes to ${h === 12 ? words[0] : words[h]}`;
  }
  if (m >= 2) {
    return `${words[m - 1]} minutes past ${words[h - 1]}`;
  }
}

console.log(timeInWords(12, 59));
