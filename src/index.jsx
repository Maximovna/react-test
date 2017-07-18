import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import SetList from './containers/SetList';
// import Form from './components/Form';
import NotFound from './common/404';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SetList} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>, document.getElementById('root')
);

//    <Route path="change" component={Form} />
