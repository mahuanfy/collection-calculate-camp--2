'use strict';

function hybrid_operation(collection) {
  var sum = 0;

  for (var index in collection) {
    sum+=(collection[index]*3+2);
  }
  return sum;
}

module.exports = hybrid_operation;

