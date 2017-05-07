'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  result.push(number);
  while (number > 0) {
    number = parseFloat((number - interval).toFixed(1));
    if (number === 0.0) {
      result.push(0)
    } else {
      result.push(number);
    }
  }
  return result;
}

module.exports = spilt_to_zero;
