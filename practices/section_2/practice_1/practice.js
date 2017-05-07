function count_same_elements(collection) {
  //在这里写入代码
  var collection_same = [];
  var key_value = "";
  var count_value = 0;

  for(var i = 0; i < collection.length;i++){
    if(collection[i] != -1){
      key_value = collection[i];
      var keyCountObj = isExist( collection,key_value, count_value);
      collection_same.push(keyCountObj);
      count_value = 0;
    }
  }

  return collection_same;
}

function isExist(collection,key_value, count_value){
  for(var j = 0;j < collection.length;j++){
    if(key_value === collection[j]){
      count_value++;
      collection[j] = -1;
    }
  }
  var keyCountObj = {key:key_value,count:count_value};

  return keyCountObj;
}

module.exports = count_same_elements;
