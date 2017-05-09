'use strict';

function hybrid_operation_to_uneven(collection) {
  var result = 0;

  for (var index in collection) {
    if (collection[index] % 2 !== 0) {
      result+=(collection[index]*3+5);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

