import { connect } from 'react-redux';
import List from '../components/List';
import { removeFromList, filterList } from '../actions';

function mapStateToProps(state) {
  return { contactList: state.listReducer.list,
    visibilityFilter: state.listReducer.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeContact: (list, elem) => {
      dispatch(removeFromList(list, elem));
    },
    changeFilter: (visibilityFilter) => {
      dispatch(filterList(visibilityFilter));
    },
  };
}

const Contacts = connect(mapStateToProps, mapDispatchToProps)(List);

export default Contacts;
