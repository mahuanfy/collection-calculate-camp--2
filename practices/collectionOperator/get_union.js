'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  result = Array.from(new Set(collection_a.concat(collection_b)));
  return result;
}

module.exports = get_union;

