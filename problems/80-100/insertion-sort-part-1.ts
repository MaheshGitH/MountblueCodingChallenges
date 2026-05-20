function insertionSort1(n: number, arr: number[]): void {
  const small = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > small) {
      arr[i + 1] = arr[i];
      console.log(arr.join(" "));
    } else {
      arr[i + 1] = small;
      console.log(arr.join(" "));
      return;
    }
  }
  arr[0] = small;
  console.log(arr.join(" "));
}

insertionSort1(6, [2, 2, 4, 5, 3, 1]);
