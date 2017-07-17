
export const FILTER = 'FILTER';
export const DELETE = 'DELETE'

export const filters = (value) => {
  return {type: FILTER, payload: value}
}

export function doFilter(data, pattern) {
  let tmp = [];
  data.forEach(function(value) {
    if (value.name.indexOf(pattern) !== -1)
      tmp.push(value);

    }
  )
  return filters(tmp)
}

export const deleteItem = (data) => {
  return {type: DELETE, payload: data}
}
