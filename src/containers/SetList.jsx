import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import List from '../components/List';
import {doFilter, deleteItem} from '../actions';

function mapStateToProps(state) {
  return {initData: state.contactList.data, filteredData: state.contactList.filteredData}
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: (data, value) => {
      dispatch(doFilter(data, value));

    },
    setDeletion: (data) => {
      dispatch(deleteItem(data))
    }
  }
}

const SetList = connect(mapStateToProps, mapDispatchToProps)(List);

export default SetList;
