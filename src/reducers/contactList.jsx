import { FILTER, DELETE } from '../actions';

const initialState = {
  data: [
    {
      id: 1,
      image: 'http://via.placeholder.com/150x150/',
      name: 'Matvei',
      number: '+375446669966',
    }, {
      id: 2,
      image: 'http://via.placeholder.com/150x150/',
      name: 'Maria',
      number: '+375449996699',
    }, {
      id: 3,
      image: 'http://via.placeholder.com/150x150/',
      name: 'Valera',
      number: '+375443336669',
    }, {
      id: 4,
      image: 'http://via.placeholder.com/150x150/',
      name: 'FurryGod',
      number: '+375299090900',
    }, {
      id: 5,
      image: 'http://via.placeholder.com/150x150/',
      name: 'Siel Phantomhive',
      number: '+375266666900',
    },
  ],
  filteredData: [],
};

const contactList = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        filteredData: action.payload,
      };

    case DELETE:
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};

export default contactList;
