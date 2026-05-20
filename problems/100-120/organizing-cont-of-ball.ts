/*
container = [[1, 4], [2, 3]]
containCapacity = []
containerValues = []
for loop -> {
  capacity = 0
  for loop -> {
    capacity += container[i][j]
  }
  containCapacity.push(capacity)
}

for loop -> {
  value = 0
  for loop -> {
    value += container[j][i]
  }
  containerValues.push(value)
}

for loop -> {
  if(containerValues[i] > containCapacity[i]) {
    return "Impossible"
  }
}
return  "Possible"
*/

function organizingContainers(container: number[][]): string {
  const n = container.length;
  //   const m = container[0].length;
  const containCapacity = [];
  const containerValues = [];
  for (let i = 0; i < n; i++) {
    let capacity = 0;
    for (let j = 0; j < n; j++) {
      capacity += container[i][j];
    }
    containCapacity.push(capacity);
  }

  for (let i = 0; i < n; i++) {
    let value = 0;
    for (let j = 0; j < n; j++) {
      value += container[j][i];
    }
    containerValues.push(value);
  }
  containCapacity.sort((a, b) => a - b);
  containerValues.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (containerValues[i] > containCapacity[i]) {
      return "Impossible";
    }
  }
  return "Possible";
}

console.log(
  organizingContainers([
    [1, 2],
    [1, 1],
  ]),
);
