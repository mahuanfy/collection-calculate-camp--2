'use strict';
var number_map_to_word = function (collection) {
  var result = [];
  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (var index in collection) {
    // result.push(letter[collection[index]]);
    result.push(String.fromCharCode(collection[index] + 96));
  }

  return result;
};

module.exports = number_map_to_word;
