'use strict';
var single_element = function (collection) {
  var resultArray = [];
  var resultArray_a = [];
  var result_a = [];
  var num = 0;

  var result = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result++;
      resultArray.push(collection[i]);
    }
  }
  resultArray_a = Array.from(new Set(resultArray));
  for (var index in resultArray_a) {

    for (var i in resultArray) {
      if (resultArray_a[index] === resultArray[i]) {
        num++;
      }
    }
    if (num === 1) {
      result_a.push(resultArray_a[index]);
    }
    num = 0;
  }
  return result_a
};
module.exports = single_element;
