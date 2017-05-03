'use strict';
function map_to_even(collection) {

  var result = [];
  for (var index in collection) {
    result.push( collection[index]*2);
  }
  return result;
}
module.exports = map_to_even;
