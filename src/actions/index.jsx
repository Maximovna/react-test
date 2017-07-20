export const DELETE = 'DELETE';
export const FILTER = 'FILTER';
export const ADD = 'ADD';
export const EDIT = 'EDIT';

export const deleteItem = (list) => ({ type: DELETE, payload: list });
export const filterList = (visibilityFilter) => ({ type: FILTER, payload: visibilityFilter });
export const deleteHandler = (array, elem) => {
  const tmp = [];
  array.forEach(value => {
    if (elem.id !== value.id) {
      tmp.push(value);
    }
  });
  return deleteItem(tmp);
};
export const addItem = (newElem) => ({ type: ADD, payload: newElem });
export const editList = (array) => ({ type: EDIT, payload: array });
