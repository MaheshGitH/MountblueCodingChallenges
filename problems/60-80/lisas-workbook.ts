/*
arr = [4, 2]
k = 3
pages = [[]]
index = 0

for loop -> {
  pages[index] = []
  for loop -> {
    if(i === k) {
      pages[index].push(i)
      pages[index + 1] = []
      index++
    }
    pages[index].push(i)
  }
  index++
}


*/

function workbook(n: number, k: number, arr: number[]): number {
  const pages: number[][] = [];
  let index = 0;
  let count = 0;
  for (const num of arr) {
    pages[index] = [];
    for (let i = 1; i <= num; i++) {
      if (i % k === 0) {
        if (i === num) {
          pages[index].push(i);
        } else {
          pages[index].push(i);
          pages[index + 1] = [];
          index++;
        }
      } else {
        pages[index].push(i);
      }
    }
    index++;
  }

  for (let i = 1; i <= pages.length; i++) {
    if (pages[i - 1].includes(i)) {
      count++;
    }
  }
  return count;
}

console.log(workbook(2, 2, [1]));
