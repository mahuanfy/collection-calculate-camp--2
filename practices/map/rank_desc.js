'use strict';
var rank_desc = function(collection){

  return collection.sort(sortNumber);
};

function sortNumber(a, b) {

  return a - b;
}

module.exports = rank_desc;
