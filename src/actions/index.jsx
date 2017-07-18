export const DELETE = 'DELETE';
export const FILTER = 'FILTER';
// export const ADD = 'ADD';

export const deleteItem = (list) => ({ type: DELETE, payload: list });

export function filterList(visibilityFilter) {
  return {
    type: FILTER,
    payload: visibilityFilter,
  };
}

export function deleteHandler(array, elem) {
  const tmp = [];
  array.forEach(value => {
    if (elem.id !== value.id) {
      tmp.push(value);
    }
  });
  return deleteItem(tmp);
}

// export function addData(array, elem) {
//   const tmp = [];
//   array.forEach(value => {
//     if (!value.id) {
//       tmp.push(elem);
//     }
//   });
//   return addItem(tmp);
// }
