'use strict';

function double_to_one(collection) {

  var result_sum = [];

  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].length; j++) {
      result_sum.push(collection[i][j]);
    }
  }

  return Array.from(new Set(result_sum));
}

module.exports = double_to_one;
