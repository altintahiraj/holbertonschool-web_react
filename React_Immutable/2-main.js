/*eslint-disable*/
const accessImmutableObject = require('./2-nested');

const obj = {
    name: {
        first: "Guillaume",
        last: "Salva"
    }
}

console.log(accessImmutableObject(obj, ['name', 'first']));