/*eslint-disable*/
import { fromJS } from "immutable";

export default function getImmutableObject(object, array) {
    return fromJS(object).getIn(array);
}