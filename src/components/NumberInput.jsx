
import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

const NumberInput = ({number,setData}) => {
  return (
    <div>
        <form className='number-value'>
            <input type='number' placeholder='please, enter your phone number' onChange={setData}/>
        </form>
        <span>{number}</span>
    </div>
  )
}

export default NumberInput;
