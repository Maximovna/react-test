import { connect } from 'react-redux';
import List from '../components/List';
import { doFilter, deleteHandler } from '../actions';

function mapStateToProps(state) {
  return { initData: state.contactList.data, filteredData: state.contactList.filteredData };
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: (data, value) => {
      dispatch(doFilter(data, value));
    },
    setDeletion: (data, elem) => {
      dispatch(deleteHandler(data, elem));
    },
  };
}

const SetList = connect(mapStateToProps, mapDispatchToProps)(List);

export default SetList;
