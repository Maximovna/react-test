import React, {Component} from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import App from './components/App'
import NotFound from './common/404';

export default class Routes extends Component {
    render() {
        return (
          <Route path="/" component={App}>
              <IndexRoute component={Nameinput}/>
              <IndexRoute component={NumberInput}/>
              <Route path="name" component={Nameinput}/>
              <Route path="number" component={NumberInput}/>
          </Route>
          <Route path="*" component={NotFound}/>
        );
    }
}
