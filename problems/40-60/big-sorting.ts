function bigSorting(unsorted: string[]): string[] {
  const sorted = unsorted.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return sorted;
}

console.log(
  bigSorting([
    "1",
    "200",
    "31415926535897932384626433832795",
    "3",
    "31415926535897932384626433832795",
  ]),
);
