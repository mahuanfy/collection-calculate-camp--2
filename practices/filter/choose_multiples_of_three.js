'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  var result = [];
  for (var index in collection)
    if (collection[index] % 3 === 0) {
      result.push(collection[index]);
    }
  return result;
}

module.exports = choose_multiples_of_three;
