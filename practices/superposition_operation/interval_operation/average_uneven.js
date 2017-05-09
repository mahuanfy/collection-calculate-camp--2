'use strict';

function average_uneven(collection) {
  var result = 0;
  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var collection_a = (collection[Math.ceil(collection.length/2)]);
  if (collection_a % 26 === 0) {
    result = (letter[Math.floor(collection_a / 26) - 1].concat(letter[26]));
  } else {
    result = (letter[Math.floor(collection_a / 26)].concat(letter[collection_a % 26]));
  }

  return result;
}

module.exports = average_uneven;
