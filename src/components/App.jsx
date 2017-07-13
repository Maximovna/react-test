import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux';
import SetName from '../containers/setName';
import setNumber from '../containers/setNumber';
import Nameinput from '../components/Nameinput';
import NumberInput from '../components/NumberInput';
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


// <li><Link to='/contact' className='item' activeClassName='active'>{InputNameData}</Link></li>
