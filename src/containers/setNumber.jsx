import React, {PropTypes} from 'react'
import Nameinput from '../components/Nameinput';
import NumberInput from '../components/NumberInput';
import {connect} from 'react-redux'
import {setNumber} from '../actions';

function mapStateToProps(state) {
    return {
      number: state.contactList.data.number
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setNumber: (el) => {
            dispatch(setNumber(el.target.value))
        }
    }
}

const InputNumberData = connect(mapStateToProps, mapDispatchToProps)(NumberInput);

export default InputNumberData;
