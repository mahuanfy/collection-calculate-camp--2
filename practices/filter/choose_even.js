'use strict';

function choose_even(collection) {
  //在这里写入代码
  var result = [];
  for (var index in collection)
    if (collection[index] % 2 === 0) {
      result.push(collection[index]);
    }
  return result;
}

module.exports = choose_even;
