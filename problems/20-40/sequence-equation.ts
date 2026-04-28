/*
p = [5, 2, 1, 3, 4]
n = p.length
result = []
for loop -> {
  position = p[i] // 5
  target = i
  for loop -> {
    if(target === p[j]) {
      result.push( j + 1, position - 1)
      break
    }
  }  
}
return result
*/

function permutationEquation(p: number[]): number[] {
  const n = p.length - 1;
  const result = [];
  for (let i = 0; i <= n; i++) {
    const position = p[i] - 1;
    const target = i + 1;
    for (let j = 0; j <= n; j++) {
      if (p[j] === target) {
        result[position] = j + 1;
        break;
      }
    }
  }
  return result;
}

console.log(permutationEquation([4, 3, 5, 1, 2]));
