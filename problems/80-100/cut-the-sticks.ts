/*
arr = [1, 2, 3]
arr.sort()
smallest = arr[0]
finalArr = []
while(arr.length === 0) {
  finalArr.push(arr.length)
  arr = arr.map((a) => a - smallest).filter((a) => a !== 0)
  smallest = arr[0]
}
*/
function cutTheSticks(arr: number[]): number[] {
  arr.sort((a, b) => a - b);
  let smallest = arr[0];
  const finalArr = [];
  while (arr.length !== 0) {
    finalArr.push(arr.length);
    arr = arr.map((a) => a - smallest).filter((a) => a !== 0);
    smallest = arr[0];
  }
  return finalArr;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
