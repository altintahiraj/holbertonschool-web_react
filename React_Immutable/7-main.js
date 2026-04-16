const { Map } = require('immutable');
const areMapsEqual = require('./7-equality');

const map1 = Map({ 
    firstName: 'Guillaume', 
    lastName: 'Salva' 
});
const map2 = Map({ 
    firstName: 'Guillaume', 
    lastName: 'Salva' 
});

console.log(areMapsEqual(map1, map2));