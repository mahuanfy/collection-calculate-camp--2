'use strict';
var rank_desc = function(collection){
  function sortNumber(a, b) {
    return a - b;
  }
  var result = [];
  result = collection.sort(sortNumber);

  return result;

};

module.exports = rank_desc;
