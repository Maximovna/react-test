export const DELETE = 'DELETE';
export const FILTER = 'FILTER';
export const ADD = 'ADD';
export const EDIT = 'EDIT';

export const deleteListItem = (list) => ({ type: DELETE, payload: list });
export const filterList = (visibilityFilter) => ({ type: FILTER, payload: visibilityFilter });
export const removeFromList = (array, elem) => {
  const tmp = [];
  array.forEach(value => {
    if (elem.id !== value.id) {
      tmp.push(value);
    }
  });
  return deleteListItem(tmp);
};
export const addToList = (newElem) => ({ type: ADD, payload: newElem });
export const editList = (array) => ({ type: EDIT, payload: array });
