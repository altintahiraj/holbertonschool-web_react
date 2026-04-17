import getImmutableObject from "./0-fromjs.js";

const result = getImmutableObject({ a: 1, b: 2, c: 3 });
console.log(JSON.stringify(result.toJS()));
