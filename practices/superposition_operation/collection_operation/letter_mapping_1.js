'use strict';

function even_to_letter(collection) {
  var result = [];

  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  for (var index in collection){
    if(collection[index]%2===0){
      result.push(letter[collection[index]]);
    }
  }

  return result;
}

module.exports = even_to_letter;
