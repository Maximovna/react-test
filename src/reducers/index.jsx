import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import listReducer from './listReducer';

const rootReducer = combineReducers({ routing: routerReducer, listReducer });

export default rootReducer;
