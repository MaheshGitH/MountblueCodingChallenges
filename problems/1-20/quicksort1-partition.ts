function quickSort(arr: number[]): number[] {
  const pivot = arr[0];
  const lesser = [];
  const greater = [];
  const equal = [];
  for (const num of arr) {
    if (num < pivot) {
      lesser.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...lesser, ...equal, ...greater];
}

console.log(quickSort([4, 5, 3, 7, 2]));

//Time complexity: O(n)
