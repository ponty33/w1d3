var countLetters = function (input) {
  var letters = input.split("");
  var total = {}
  for (i = 0; i < letters.length; i++) {
      assignLetter(total, letters[i]);
  }
  function assignLetter(obj, key) {
    typeof obj[key] === 'undefined' ? obj[key] = 1 : obj[key] ++;
  }
  return total;
}

console.log(countLetters("lighthouse in the house"));