import { FILTER, DELETE, ADD, EDIT } from '../actions';

const initialState = {
  list: [
    {
      id: 0,
      image: 'http://lorempixel.com/400/200/cats',
      name: 'Matvei',
      number: '+375446669966',
    }, {
      id: 1,
      image: 'http://lorempixel.com/400/200/cats',
      name: 'Maria',
      number: '+375449996699',
    }, {
      id: 2,
      image: 'http://lorempixel.com/400/200/cats',
      name: 'Valera',
      number: '+375443336669',
    }, {
      id: 3,
      image: 'http://lorempixel.com/400/200/cats',
      name: 'FurryGod',
      number: '+375299090900',
    }, {
      id: 4,
      image: 'http://lorempixel.com/400/200/cats',
      name: 'Siel Phantomhive',
      number: '+375266666900',
    },
  ],
  visibilityFilter: '',
  edit: {
    id: 0,
    image: 'http://lorempixel.com/400/200/cats',
    name: '',
    number: '',
  },
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        list: action.payload,
      };
    case FILTER:
      return {
        ...state,
        visibilityFilter: action.payload,
      };
    case ADD:
      return {
        ...state,
        list: action.payload,

      };
    case EDIT:
      return {
        ...state,
        edit: action.payload,

      };

    default:
      return state;
  }
};

export default listReducer;
