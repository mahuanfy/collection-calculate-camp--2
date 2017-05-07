'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var result = 0;
  for (var index in collection) {
    if (collection[index] % 2 === 0) {
      result = collection[index];

    }
  }

  return result;
}

module.exports = find_last_even;
