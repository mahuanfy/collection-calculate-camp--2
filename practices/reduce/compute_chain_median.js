'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var result = [];
  var resultString = [];
  resultString = collection.split("->");
  for (var index in resultString) {
    result.push(parseInt(resultString[index]));
  }
  result = result.sort(sortNumber);
  var number = (result[result.length / 2 - 1] + result[result.length / 2]) / 2;
  return number;
}
function sortNumber(a, b) {
  return a - b;
}

module.exports = compute_chain_median;
