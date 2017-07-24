import { connect } from 'react-redux';
import Form from '../components/Form';
import { editList } from '../actions';

function mapStateToProps(state) {
  return {
    contactList: state.listReducer.list,
    elem: {
      id: state.listReducer.list.length,
      name: '',
      number: '',
      image: 'http://lorempixel.com/400/200/cats' },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setChanges: (elem) => {
      dispatch(editList(elem));
    },
  };
}

const Edit = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Edit;
