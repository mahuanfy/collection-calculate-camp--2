'use strict';

function average_to_letter(collection) {
  var sum =0;
  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  for (var index in collection){
    sum+=collection[index];
  }

  return letter[Math.ceil(sum/collection.length)];
}

module.exports = average_to_letter;

