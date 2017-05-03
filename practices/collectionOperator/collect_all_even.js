'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var collection_num=[];
  for(var i=0;i<collection.length;i++){
    if (collection[i] % 2 === 0) {
      collection_num.push(collection[i]);
    }
  }
  return collection_num;
}

module.exports = collect_all_even;
