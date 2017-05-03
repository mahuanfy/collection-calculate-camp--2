'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      result.push(letter[i]);
    }
  }
  if (number_a > number_b) {
    for (var i = number_a; i >= (number_b); i--) {
      result.push(letter[i]);
    }
  }
  if (number_a === number_b) {
    result.push(letter[number_a]);
  }
  return result;
}

module.exports = get_letter_interval;
