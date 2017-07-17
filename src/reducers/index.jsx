import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import contactList from './contactList';

const rootReducer = combineReducers({ routing: routerReducer, contactList });

export default rootReducer;
