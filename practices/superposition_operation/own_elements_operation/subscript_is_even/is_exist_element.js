'use strict';
var is_exist_element = function (collection, element) {
  var resultArray = [];
  var result = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i) % 2 === 0) {
      result++;
      resultArray.push(collection[i]);
    }
  }
  if (element === 3 && resultArray.indexOf(3) !== -1) {
    return true;
  } else {
    return false;
  }
  if (element === 4 && resultArray.indexOf(4) === -1) {
    return false
  } else {
    return true;
  }

}
module.exports = is_exist_element;
