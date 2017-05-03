'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  var count = 0;
  for (var j = 0; j < collection_a.length; j++) {
    for (var i = 0; i < collection_b.length; i++) {
      if (collection_b[i] != collection_a[j]) {
        count++;
      }
    }
    if(count === collection_b.length){
      result.push(collection_a[j]);
    }
    count=0;
  }
  return result;
}

module.exports = choose_no_common_elements;
