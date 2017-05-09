'use strict';
var even_asc_odd_desc = function (collection) {
  var resultArray_a = [];
  var resultArray_b = [];

  for (var i = 0; i < collection.length; i++) {
    if ((collection[i]) % 2 === 0) {

      resultArray_a.push(collection[i]);
    } else {
      resultArray_b.push(collection[i]);
    }
  }
  
  return resultArray_a.sort(com_a).concat(resultArray_b.sort(com_b));
};
function com_a(a, b) {
  return a - b;

}
function com_b(a, b) {
  return b - a;
}
module.exports = even_asc_odd_desc;
