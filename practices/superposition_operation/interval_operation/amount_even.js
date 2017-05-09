'use strict';

function amount_even(collection) {
  var sum = 0;
  for (var index in collection) {
    if (collection[index] % 2 === 0) {
      sum += collection[index];
    }
  }
  return sum;
}

module.exports = amount_even;
