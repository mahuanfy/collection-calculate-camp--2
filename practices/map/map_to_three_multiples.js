'use strict';
var map_to_three_multiples = function (collections) {
  var result = [];
  for (var index in collections) {
    result.push(collections[index] * 3);
  }
  return result;
};

module.exports = map_to_three_multiples;
