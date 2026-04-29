/*
a = [-2, -1, 0, 1, 2]
result = 0
for loop -> {
  if(a[i] <= 0){
    result++
  }
}
  return result >= k ? "NO" : "YES"
*/

function angryProfessor(k: number, a: number[]): string {
  let arrived = 0;
  for (const num of a) {
    if (num <= 0) {
      arrived++;
    }
  }
  console.log(arrived);
  return arrived >= k ? "NO" : "YES";
}

console.log(angryProfessor(3, [-2, -1, 0, 1, 2]));
