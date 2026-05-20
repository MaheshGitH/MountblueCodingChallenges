/*
s = 'hackerhappy'
t = 'hackerrank'
k = 9
if(s === t) {
  if(k % 2 === 0) {
    return 'Yes'
  } else if(s.length * 2 <= k) {
    return 'Yes'
  } else {
    return 'No'
  }
}
deleteOperations = 0
appendOperations = 0
for loop -> {
  if(s[i] !== t[i]) {
    deleteOperations = s.slice(i , s.length).length
    appendOperations = t.slice(i , t.length).length
    break
  }
}
totalOperation = deleteOperations + appendOperations
if(totalOperation === k) {
  return 'Yes'
} else if((totalOperation - k) % 2 === 0) {
  return 'Yes'
} else  {
  return 'No'
}
*/

function appendAndDelete(s: string, t: string, k: number): string {
  if (s === t) {
    if (k % 2 === 0) {
      return "Yes";
    } else if (s.length * 2 <= k) {
      return "Yes";
    } else {
      return "No";
    }
  }
  let deleteOperation = 0;
  let appendOperation = 0;
  const n = s.length > t.length ? s.length : t.length;
  for (let i = 0; i < n; i++) {
    if (s[i] !== t[i]) {
      deleteOperation = s.slice(i, s.length).length;
      appendOperation = t.slice(i, t.length).length;

      break;
    }
  }

  const totalOperation = deleteOperation + appendOperation;

  if (totalOperation > k) {
    return "No";
  }
  if (s.length + t.length <= k) {
    return "Yes";
  }
  if (totalOperation === k) {
    return "Yes";
  } else if ((totalOperation - k) % 2 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(appendAndDelete("abc", "def", 7));
