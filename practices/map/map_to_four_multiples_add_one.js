'use strict';
var map_to_four_multiples_add_one = function (collection) {
  var result = [];
  for (var index in collection) {
    result.push((collection[index] * 4) + 1);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
