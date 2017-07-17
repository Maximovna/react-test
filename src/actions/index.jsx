export const FILTER = 'FILTER';
export const DELETE = 'DELETE';

export const filters = (value) => ({ type: FILTER, payload: value });
export const deleteItem = (data) => ({ type: DELETE, payload: data });

export function doFilter(data, pattern) {
  if (!pattern) {
    return filters(data);
  }
  const tmp = [];
  data.forEach((value) => {
    if (value.name.indexOf(pattern) !== -1) {
      tmp.push(value);
    }
  });
  return filters(tmp);
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
