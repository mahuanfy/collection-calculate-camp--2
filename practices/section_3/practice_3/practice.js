function create_updated_collection(collection, object_b) {

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
  for (var index in collection_same){
    for(var index_b in object_b.value){
      if(collection_same[index].key === object_b.value[index_b]){
        collection_same[index].count-=Math.floor((collection_same[index].count)/3);
      }
    }
  }
  return collection_same;
}

function isExist(collection,key_value, count_value) {
  for (var j = 0; j < collection.length; j++) {
    if (key_value === collection[j]) {
      count_value++;
      collection[j] = -1;
    }
  }
  var keyCountObj = {key: key_value, count: count_value};
  return keyCountObj;
}

module.exports = create_updated_collection;
