/*eslint-disable*/
const { Map, List } = require('immutable');

function mergeDeeplyElements(page1, page2) {
  const merged = Map(page1).mergeDeep(page2);

  return List(merged.toArray());
}

module.exports = mergeDeeplyElements;