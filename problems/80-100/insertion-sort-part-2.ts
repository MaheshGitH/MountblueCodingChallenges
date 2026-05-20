function insertionSort2(n: number, arr: number[]): void {
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let value = arr[i];
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = value;
    console.log(arr.join(" "));
  }
}

insertionSort2(7, [3, 4, 7, 5, 6, 2, 1]);
