import {SET_NAME, SET_NUMBER} from '../actions';


const initialState = {
  data: [
    {
      name: '',
      number: null
    }
  ]
}

const contactList = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        data: {
          name: action.payload

        }

      }
      case SET_NUMBER:
      return {
          ...state,
          data: {
            number: action.payload

          }
        }

        default: return state
      }
  }

  export default contactList
