function superReducedString(s: string): string {
  if (s.length === 0) return "Empty String";
  let result = s;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] == s[i + 1]) {
      result = s.replace(s[i] + s[i + 1], "");
      return superReducedString(result);
    }
    if (i + 1 === s.length) {
      return result;
    }
  }
}

console.log(superReducedString("baab"));

//Time complexity: O(n^2)
//Better option: use a Stack to reduce time complexity from O(n^2) to O(n).

//Using Stack

function superReducedStringUsingStack(s: string): string {
  const stack: string[] = [];

  for (const char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  const result = stack.join("");
  return result.length === 0 ? "Empty String" : result;
}

console.log(superReducedStringUsingStack("aabbs"));

//Time complexity: O(n)
