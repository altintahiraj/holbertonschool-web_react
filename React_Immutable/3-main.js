const { getListObject, addElementToList } = require('./3-list');

const list = getListObject([1, 2, 3]);
const newList = addElementToList(list, 4);

console.log(newList.toJS());