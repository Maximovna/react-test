import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import '../style.css';

const App = (props) => (
  <div className="wrapper">
    <div className="container">
      {props.children}
    </div>
  </div>
);


App.propTypes = {
  children: PropTypes.object,
};

export default connect()(App);
