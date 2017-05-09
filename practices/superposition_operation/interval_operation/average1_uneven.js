'use strict';

function average_uneven(collection) {
  var sum = 0;
  var num =0;

  for (var index in collection) {
    if (collection[index] % 2 !== 0) {
      sum += collection[index];
      num++;
    }
  }

  return sum/num;
}

module.exports = average_uneven;
