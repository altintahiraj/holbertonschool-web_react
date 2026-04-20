const { List } = require('immutable');

 function getListObject(array) {
    console.log("el", List(array))
    return List(array);
  
}

function addElementToList(list, element) {
    console.log("el", list.push(element))
    return list.push(element);
}
module.exports = {
    getListObject,
    addElementToList,
};