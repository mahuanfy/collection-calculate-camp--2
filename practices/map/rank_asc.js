'use strict';
var rank_asc = function (collection) {

  return collection.sort(sortNumber);
};

function sortNumber(a, b) {

  return b - a;
}

module.exports = rank_asc;
