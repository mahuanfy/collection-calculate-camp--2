'use strict';
function rank_by_two_large_one_small(collection) {
  collection.sort(com_a);

  for (var index in collection) {
    if ((index + 1) % 3 === 0) {
      let a = collection[index - 2];
      collection[index - 2] = collection[index - 1];
      collection[index - 1] = collection[index];
      collection[index] = a;
    }
  }
  return collection;
}
function com_a(a, b) {
  return a - b;

}
module.exports = rank_by_two_large_one_small;
