'use strict';

function compute_median(collection) {
  //在这里写入代码
  var result = [];
  var number = 0;
  result = collection.sort(sortNumber);
  if (result.length % 2 === 0) {
    number = (result[result.length / 2 - 1] + result[result.length / 2]) / 2;
  } else {
    number = result[Math.floor(result.length / 2)];
  }
  return number;
}
function sortNumber(a, b) {
  return a - b;
}


module.exports = compute_median;


