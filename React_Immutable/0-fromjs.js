/*eslint-disable */
import { fromJS } from 'immutable';

function getImmutableObject(object) {
    const map = fromJS(object);
    return map;
}
export default getImmutableObject;