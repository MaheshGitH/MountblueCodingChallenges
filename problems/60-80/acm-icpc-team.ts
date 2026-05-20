/*
topics = ['10101', '11110', '00010']
topicsLength = topics.length
n = topics[0].length
result = []
index = 0
for(let i = 0; i < topicsLength; i++){
  let j = 1
  for(; j < topicsLength;) {
    result[index] = []
    for(let k = 0; k < n; k++) {
      if(topics[i][k] === '1' || topics[j][k] === '1') {
        result[index].push(k)
      }
    }
    index++
  }
  j++
}

*/

function acmTeam(topic: string[]): number[] {
  const topicsLength = topic.length;
  const n = topic[0].length;

  let max = 0;
  let count = 0;

  for (let i = 0; i < topicsLength; i++) {
    for (let j = i + 1; j < topicsLength; j++) {
      let result = 0;
      for (let k = 0; k < n; k++) {
        if (topic[i][k] === "1" || topic[j][k] === "1") {
          result++;
        }
      }
      if (result > max) {
        max = result;
        count = 1;
      } else if (result === max) {
        count++;
      }
    }
  }

  return [max, count];
}

console.log(acmTeam(["11101", "10101", "11001", "10111", "10000", "01110"]));
