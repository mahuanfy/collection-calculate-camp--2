'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var result = collection[0];
  for (var index in collection) {
    if (collection[index] > result) {
      result = (collection[index]);
    }
  }
  return result;
}

module.exports = collect_max_number;
