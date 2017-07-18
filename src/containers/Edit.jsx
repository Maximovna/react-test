import { connect } from 'react-redux';
import Form from '../components/Form';
import { editItem } from '../actions';

function mapStateToProps(state) {
  return {
    contactList: state.listReducer.list,
    elem: { name: '', number: '' },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setChanges: (elem) => {
      dispatch(editItem(elem));
    },
  };
}

const Edit = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Edit;
