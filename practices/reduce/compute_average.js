'use strict';

function compute_average(collection) {
  //在这里写入代码
  var result = 0;
  var sum = 0;
  for (var index in collection) {
    result += collection[index];
    sum++;
  }
  result = result / sum;
  return result;
}

module.exports = compute_average;

