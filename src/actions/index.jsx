export const SET_NAME = 'SET_NAME';
export const SET_NUMBER = 'SET_NUMBER';

export const setName = (data) => {
    return {type: SET_NAME, payload: data}
}


export const setNumber = (data) => {
    return {type: SET_NUMBER, payload: data}
}
