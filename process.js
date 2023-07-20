function get2LetterCombos() {
  let chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = [];

  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      let firstLetter = chars[i];
      let secondLetter = chars[j];

      let combo = firstLetter + secondLetter;
      result.push(combo);
    }
  }

  return result;
}

console.log(get2LetterCombos());
