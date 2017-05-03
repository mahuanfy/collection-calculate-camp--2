'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result_sum = [];
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].length; j++) {
      result_sum.push(collection[i][j]);
    }
  }
  result = Array.from(new Set(result_sum))
  return result;
}

module.exports = double_to_one;
