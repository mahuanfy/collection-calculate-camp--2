'use strict';

function double_to_one(collection) {

  var resultArray = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length === undefined) {
      resultArray.push(collection[i]);
    }

    for (var j = 0; j < collection[i].length; j++) {
      resultArray.push(collection[i][j]);
    }
  }

  return resultArray;
}

module.exports = double_to_one;
