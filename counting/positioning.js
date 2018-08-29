var countLetters = function (input) {
    var letters = input.toLowerCase();
    var total = {}
    for (i = 0; i < letters.length; i++) {
        typeof total[letters[i]] === 'undefined' ? total[letters[i]] = [i] : total[letters[i]].push(i);
    }
    delete total[' '];
    return total;
  }
  

  
  console.log(countLetters("lighthouse in the house"));
                            01234567890123456789012


/*
{
  l: 0
  i: 1, 11
  g: 2
  h: 3, 5, 15, 18
  t: 4, 14
  o: 6, 19
  u: 7, 20
  s: 8, 21
  e: 9, 16, 22
  n: 12
}
*/