/*eslint-disable*/
const { fromJS } = require('immutable');

function accessImmutableObject(object, array) {
  return fromJS(object).getIn(array);
}

module.exports = accessImmutableObject;