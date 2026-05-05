/*
if(n === 0) return 1
height = 1
for loop -> {
  if(i % 2 === 0) {
    height * 2
  } else {
    height + 1
  }
}
return height
*/

function utopianTree(n: number): number {
  if (n === 0) return 1;
  let height = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      height *= 2;
    } else {
      height++;
    }
  }
  return height;
}

console.log(utopianTree(4));
