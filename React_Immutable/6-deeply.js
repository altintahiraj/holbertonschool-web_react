const { Map, fromJS } = require('immutable');

function mergeDeeplyElements(page1, page2) {
    return Map(fromJS(page1).mergeDeep(fromJS(page2)));
}

module.exports = mergeDeeplyElements;