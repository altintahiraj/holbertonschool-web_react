/*eslint-disable*/
const { List, Map } = require('immutable');

function concatElements(page1, page2) {
  return List(page1).concat(page2);
}

function mergeElements(page1, page2) {
  const mergedMap = Map(page1).merge(page2);

  return List(
    mergedMap
      .toArray()
  );
}

module.exports = {
  concatElements,
  mergeElements
};