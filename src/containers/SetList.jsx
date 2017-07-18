import { connect } from 'react-redux';
import List from '../components/List';
import { deleteHandler, filterList } from '../actions';

function mapStateToProps(state) {
  return { contactList: state.listReducer.list,
    visibilityFilter: state.listReducer.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDeletion: (list, elem) => {
      dispatch(deleteHandler(list, elem));
    },
    setFilter: (visibilityFilter) => {
      dispatch(filterList(visibilityFilter));
    },
  };
}

const SetList = connect(mapStateToProps, mapDispatchToProps)(List);

export default SetList;
