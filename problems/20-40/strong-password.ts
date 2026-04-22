/*
numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"

const result = {
  length: false,
  number: false,
  lower_case: false,
  upper_case: false,
  special_character: false,
} 
  if(n > 6) result.length = true
  for loop -> {
    if(numbers.includes(ch)) result.number = true
    if(lower_case.includes(ch)) result.lower_case = true
    if(upper_case.includes(ch)) result.upper_case = true
    if(special_characters.includes(ch)) result.special_character: true
   }
    addCharacter = 0

    if(!result.length) {
      addCharacter += 6 - n
    } else if(!result.number) {
      addCharacter++
    } ...
     return addCharacter

*/
function minimumNumber(n: number, password: string): number {
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  const result = {
    length: false,
    number: false,
    lower_case: false,
    upper_case: false,
    special_characters: false,
  };

  if (n >= 6) result.length = true;
  for (const ch of password) {
    if (numbers.includes(ch)) {
      result.number = true;
    } else if (lower_case.includes(ch)) {
      result.lower_case = true;
    } else if (upper_case.includes(ch)) {
      result.upper_case = true;
    } else if (special_characters.includes(ch)) {
      result.special_characters = true;
    }
  }
  let addCharacter = 0;
  if (!result.lower_case) {
    addCharacter++;
  }
  if (!result.upper_case) {
    addCharacter++;
  }
  if (!result.special_characters) {
    addCharacter++;
  }
  if (!result.number) {
    addCharacter++;
  }
  if (!result.length) {
    if (addCharacter + n <= 6) {
      addCharacter = 6 - n;
    }
  }
  return addCharacter;
}

console.log(minimumNumber(7, "Aa1a$aa"));

//Time complexity: O(n)
