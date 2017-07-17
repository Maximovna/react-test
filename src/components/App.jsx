import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux';
import List from '../containers/SetList';
const App = (props) => {
    return (
        <div className='wrapper'>
            <div className='container'>
            {props.children}
            </div>
        </div>
    )
}


export default connect()(App);
