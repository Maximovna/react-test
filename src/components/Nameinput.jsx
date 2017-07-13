
import React, {PropTypes} from 'react'
import {connect} from 'react-redux';

const Nameinput = ({name,setData}) => {
  return (
    <div>
        <form className='name-value'>
            <input type='text' placeholder='please, enter your name' onChange={setData}/>
        </form>
        <span>{name}</span>
    </div>
  )
}

export default Nameinput;
