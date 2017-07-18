import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';

class Form extends React.Component {

  handleSubmit() {
    const newArray = this.props.contactList;
    newArray.push(this.props.elem);
    this.props.setNew(newArray);
  }
  // handleChange() {
  //   const changedArray = this.props.contactList;
  //   changedArray.splice(this.props.routeParams.id, this.props.elem);
  //   this.props.setChanges(changedArray);
  // }
  render() {
    return (
      <div>
        <Dropzone
          accept="image/*"
          multiple={false}
        >
          <p>Upload The Photo</p>
        </Dropzone>
        Your new contact will be called: <input
          type="text"
          className="name"
          placeholder="Enter the new name"
          defaultValue=""
          onChange={(e) => { this.props.elem.name = e.target.value; }}
        />
        And its phone number will be: <input
          type="number"
          className="phone-number"
          placeholder="Enter the new phone number"
          defaultValue=""
          onChange={(e) => this.props.elem.number = e.target.value}
        />
        <button
          className="submit"
          onClick={() => { (this.props.routeParams.id) ? this.handleChange() : this.handleSubmit(); }}
        >
        Submit
        </button>
        <Link to="/"> back </Link>
      </div>
    );
  }
}

Form.propTypes = {
  contactList: PropTypes.array,
  setNew: PropTypes.func,
  setChanges: PropTypes.func,
  elem: PropTypes.object,

};

export default Form;
//this.props.routeParams.id
