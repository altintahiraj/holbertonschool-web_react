/*eslint-disable*/
import { List } from 'immutable';
export function getListObject(array) {
    return List(array);
}
export function addElementToList(list, element) {
    return list.push(element);
    // const newList =List(list);
    // const newList1 = newList.push(element);
    // return newList1;
}