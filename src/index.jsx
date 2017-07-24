import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import SetList from './containers/SetList';
import Edit from './containers/Edit';
import Add from './containers/Add';
import NotFound from './common/404';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SetList} />
        <Route path="change/:id" component={Edit} />
        <Route path="add" component={Add} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>, document.getElementById('root')
);

//    <Route path="change" component={Form} />
