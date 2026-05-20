function toys(w: number[]): number {
  w.sort((a, b) => a - b);
  let container = 1;
  let minLoad = w[0] + 4;
  for (const weig of w) {
    if (weig <= minLoad) {
      continue;
    } else if (weig > minLoad) {
      minLoad = weig + 4;
      container++;
    }
  }
  return container;
}

console.log(toys([1, 2, 3, 21, 7, 12, 14, 21]));
