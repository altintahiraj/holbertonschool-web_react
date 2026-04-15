/*eslint-disable*/
import { Map } from 'immutable';

function getImmutableObject(object) {
    const map = Map(object);
    return map;
}
export default getImmutableObject;