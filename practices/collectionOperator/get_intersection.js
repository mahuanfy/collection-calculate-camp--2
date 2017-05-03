'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  for (var i = 0; i < collection_b.length; i++) {
    for (var j = 0; j < collection_a.length; j++) {
      if (collection_b[i] === collection_a[j]) {
        result.push(collection_b[i])
      }
    }
  }
  return result;
}

module.exports = get_intersection;
