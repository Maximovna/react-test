import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
    return store
}

export default configureStore;
