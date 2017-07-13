import React, {PropTypes} from 'react'
import Nameinput from '../components/Nameinput';
import {connect} from 'react-redux'
import {setName} from '../actions';

function mapStateToProps(state) {
    return {
      name: state.contactList.data.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setName: (el) => {

            dispatch(setName(el.target.value))
        }
    }
}

const InputNameData = connect(mapStateToProps, mapDispatchToProps)(Nameinput);

export default InputNameData;
