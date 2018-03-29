function count_same_elements(collection) {
  let result = [];
  let lastresult = [];
  let count = 0;
  let temp = collection[0];
  for (let i = 0; i < collection.length; i++) {
    if (temp === collection[i]) {
      count++;
    }
    if (temp != collection[i]) {
      result.push({
        key: temp,
        count: count
      });
      temp = collection[i];
      count = 1;
    }
    if (collection[i].length > 2) {
      temp = collection[i].slice(0, 1);
      count = collection[i].slice(2);
      count = parseInt(count);
      result.push({
        key: temp,
        count: count
      });
      count = 0;
    }
  }

  let name = result[0].key;
  let summary = result[0].count;
  for (let j = 1; j < result.length; j++) {
    if (name === result[j].key) {
      summary += result[j].count;

    }
    if (name != result[j].key) {
      lastresult.push({
        name: name,
        summary: summary
      });
      name = result[j].key;
      summary = result[j].count;
    }
  }
  lastresult.push({
    name: result[result.length - 1].key,
    summary: result[result.length - 1].count
  })
  return lastresult;
}

module.exports = count_same_elements;
