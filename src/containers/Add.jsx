import { connect } from 'react-redux';
import Form from '../components/Form';
import { addToList } from '../actions';

function mapStateToProps(state) {
  return {
    contactList: state.listReducer.list,
    elem: {
      id: state.listReducer.list.length,
      name: '',
      number: '',
      image: 'http://lorempixel.com/400/200/cats' } };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveNew: (newElem) => {
      dispatch(addToList(newElem));
    },
  };
}

const Add = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Add;
