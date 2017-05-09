'use strict';
function map_to_even(collection) {

  var resultArray = [];

  for (var index in collection) {
    resultArray.push( collection[index]*2);
  }

  return resultArray;
}
module.exports = map_to_even;
