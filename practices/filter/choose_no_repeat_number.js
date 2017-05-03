'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var result = [];
  result = Array.from(new Set(collection));
  return result;
}

module.exports = choose_no_repeat_number;
