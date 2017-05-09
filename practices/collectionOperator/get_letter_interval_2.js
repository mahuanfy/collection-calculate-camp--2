'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      if (i % 26 === 0) {
        result.push(letter[Math.floor(i / 26) - 1].concat(letter[26]));
      } else {
        result.push(letter[Math.floor(i / 26)].concat(letter[i % 26]));
      }
    }
  }
  if (number_a > number_b) {
    for (var i = number_a; i >= (number_b); i--) {
      if (i % 26 === 0) {
        result.push(letter[Math.floor(i / 26) - 1].concat(letter[26]));
      } else {
        result.push(letter[Math.floor(i / 26)].concat(letter[i % 26]));
      }
    }
  }
  if (number_a === number_b) {
    if (number_a % 26 === 0) {
      result.push(letter[Math.floor(number_a / 26) - 1].concat(letter[26]));
    } else {
      result.push(letter[Math.floor(number_a / 26)].concat(letter[number_a % 26]));
    }
  }

  return result;
}

module.exports = get_letter_interval_2;

