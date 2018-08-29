var countLetters = function (input) {
  var letters = input.split(" ").join("").toLowerCase();
  var total = {}
  for (i = 0; i < letters.length; i++) {
      assignLetter(total, letters[i]);
  }
  var assignLetter = function(obj, key) {
    typeof obj[key] === 'undefined' ? obj[key] = 1 : obj[key] ++;
  }
  return total;
}

console.log(countLetters("lighthouse in the house"));

/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
*/