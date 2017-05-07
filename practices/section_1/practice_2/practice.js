function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_same=[];
  var q=0;
  for( var i = 0 ; i<collection_a.length;i++){
    for(var j = 0; j<collection_b.length;j++){
      for(var f = 0; f<collection_b[j].length;f++){
        if(collection_a[i] === collection_b[j][f]){
          collection_same[q++] =collection_b[j][f];
        }
      }
    }
  }
  return collection_same;
}


module.exports = collect_same_elements;
