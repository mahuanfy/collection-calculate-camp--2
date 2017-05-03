'use strict';
var rank_asc = function (collection) {
  function sortNumber(a, b) {
    return b - a;
  }
  var result = [];
  result = collection.sort(sortNumber);

  return result;
};

module.exports = rank_asc;
