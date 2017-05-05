'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  var result_a = [];
  result_a = Array.from(new Set(collection));

  for (var index in result_a) {
    var sum = 0;
    for(var index_r in collection){
      if(collection[index_r] === result_a[index]){
        sum++;
      }
    }
    result[result_a[index]]=sum;
  }

  return result;
}

module.exports = grouping_count;
