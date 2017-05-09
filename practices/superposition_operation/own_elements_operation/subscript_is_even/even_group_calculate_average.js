'use strict';
var even_group_calculate_average = function(collection){
  var resultArray = [];
  var resultArray_a =[];
  var resultArray_one = 0;
  var resultArray_two = 0;
  var resultArray_three = 0;
  var result_one=[];
  var result_two =[];
  var result_three =[];
  var num_a=0;
  var num_b=0;
  var num_c=0;
  var result = 0;
  var collectionArray = [];
  var a=0;

  for (let i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result++;
      resultArray.push(collection[i]);
    }
  }
  for(var i in resultArray){
    if(resultArray[i] %2 !==0){
      a++;
    }
  }
  if(a === resultArray.length){
    collectionArray.push(0);
    return collectionArray;
  }

  for(let index in resultArray){
    if(resultArray[index] % 2 === 0){
        resultArray_a.push(resultArray[index]);
    }
  }
  for(let index in resultArray_a){
    if(resultArray_a[index] / 100 > 1){
      result_three.push(resultArray_three[index]);
      resultArray_three +=resultArray_a[index];
      num_c++;
    }else if(resultArray_a[index] / 10 >1){
      result_two.push(resultArray_two[index]);
      resultArray_two+=resultArray_a[index];
      num_b++;
    }else{
      result_one.push(resultArray_one[index]);
      resultArray_one+=resultArray_a[index];
      num_a++;
    }
  }
  if(result_two.length===0&&result_one.length ===0){
    collectionArray.push(resultArray_three/num_c);
    return collectionArray;
  }
      collectionArray.push(resultArray_one/num_a);
      collectionArray.push(resultArray_two/num_b);
      collectionArray.push(resultArray_three/num_c);

  return collectionArray;
};
module.exports = even_group_calculate_average;
