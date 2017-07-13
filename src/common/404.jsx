import React, {Component} from 'react';
import {connect} from 'react-redux';


const NotFound = () => (
    <h2>NOT FOUND! 404</h2>
);
export default connect()(NotFound)
