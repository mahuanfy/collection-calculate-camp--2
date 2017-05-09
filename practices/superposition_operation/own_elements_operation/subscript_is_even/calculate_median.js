'use strict';
var calculate_median = function (collection) {
  var resultArray = [];
  var result = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result++;
      resultArray.push(collection[i]);
    }
  }
  if (result % 2 !== 0) {
    return resultArray[Math.ceil(resultArray.length / 2) - 1];
  } else {
    return (resultArray[Math.ceil(resultArray.length / 2)-1] + resultArray[Math.ceil(resultArray.length / 2)])/2;
  }
}
  module.exports = calculate_median;
