//require('./styles')

import React from 'react'
// import Routes from './routes';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import configureStore from './store/configureStore'
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App'
import InputNameData from './containers/setName'
import InputNumberData from './containers/setNumber'
import NotFound from './common/404';

const store = configureStore({})
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={InputNameData}/>
          <IndexRoute component={InputNumberData}/>
        </Route>
        <Route path="*" component={NotFound}/>
      </Router>
    </Provider>, document.getElementById('root')
)
// <Route path="contact" component={InputNameData}/>
