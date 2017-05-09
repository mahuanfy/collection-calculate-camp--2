'use strict';
var calculate_average = function(collection){
  var result = 0;
  var num = 0;

  for(var i = 0;i<collection.length;i++){
    if((i+1) % 2 === 0){
        num++;
        result+=collection[i];
    }
  }

  return result/num;
};
module.exports = calculate_average;
