'use strict';

function hybrid_operation_to_uneven(collection) {
  var resultArray = [];

  for (var index in collection) {
    if (collection[index] % 2 !== 0) {
      resultArray.push(collection[index]*3+2);
    }
  }
  return resultArray;
}

module.exports = hybrid_operation_to_uneven;

