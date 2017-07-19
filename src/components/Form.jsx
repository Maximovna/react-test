import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Form extends React.Component {
  constructor(props) {
    super();
    if (props.routeParams.id) {
      const newElem = props.contactList
                .filter(value => (value.id === +props.routeParams.id));
      props.setChanges(newElem[0]);
    }
  }

  // componentWillMount() {
  //
  // }

  handleSubmit() {
    const newArray = this.props.contactList;
    newArray.push(this.props.elem);
    this.props.setNew(newArray);
  }
  handleChange() {
    const changedArray = this.props.contactList;
    changedArray.splice(this.props.routeParams.id, 1, this.props.elem);
    this.props.setChanges(changedArray);
  }
  render() {
    return (
      <div>
        <input type="file" name="img" accept="image/jpeg,image/png,image/gif" />
        Your new contact will be called: <input
          type="text"
          className="name"
          placeholder={this.props.elem.name}
          onChange={(e) => { this.props.elem.name = e.target.value; }}
        />
        And its phone number will be: <input
          type="text"
          className="phone-number"
          placeholder={this.props.elem.number}
          onChange={(e) => this.props.elem.number = e.target.value}
        />
        <button
          className="submit"
          onClick={() => {
            (this.props.routeParams.id) ? this.handleChange() : this.handleSubmit();
          }}
        >
          <Link to="/">
        Submit
        </Link>
        </button>
        <Link to="/"> Back </Link>
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
