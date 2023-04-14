function letterCombinations(input_digit) {
  //Complete the function

	const mapping = {
    '0': '0',
    '1': '1',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  function backtrack(combination, next_digits, output) {
    if (next_digits.length === 0) {
      output.push(combination);
    } else {
      const digit = next_digits[0];
      const letters = mapping[digit];
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        backtrack(combination + letter, next_digits.slice(1), output);
      }
    }
  }

  if (input_digit.length === 0) {
    return [];
  } else {
    const output = [];
    backtrack('', input_digit, output);
    return output.sort();
  }
}

module.exports = letterCombinations;
