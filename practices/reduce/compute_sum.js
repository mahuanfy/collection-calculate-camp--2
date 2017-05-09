'use strict';

function calculate_elements_sum(collection) {
  var sum =0;

  for(var index in collection){
    sum+=collection[index];
  }

  return sum;
}

module.exports = calculate_elements_sum;

