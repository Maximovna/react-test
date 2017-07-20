import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../style.css';

class Form extends React.Component {
  constructor(props) {
    super();
    if (props.routeParams.id) {
      const newElem = props.contactList
                .filter(value => (value.id === +props.routeParams.id));
      props.setChanges(newElem[0]);
    }
  }

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
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <p>Upload a photo</p>
          <input
            type="file"
            id="hidden"
            className={styles.file}
            name="img"
            accept="image/jpeg,image/png,image/gif"
          />
          <label htmlFor="hidden" className={styles.select}>Select file</label>
          <div className={styles.name}>
            <p>Your new contact will be called:</p> <input
              type="text"
              className={styles.enterName}
              placeholder={this.props.elem.name}
              onChange={(e) => { this.props.elem.name = e.target.value; }}
            />
          </div>
          <p>And its phone number will be:</p> <input
            type="text"
            className={styles.enterNumber}
            placeholder={this.props.elem.number}
            onChange={(e) => this.props.elem.number = e.target.value}
          />
          <div>
            <button
              className={styles.submit}
              onClick={() => {
                (this.props.routeParams.id) ? this.handleChange() : this.handleSubmit();
              }}
            >
              <Link to="/">
          Submit
        </Link>
            </button>
            <button
              className={styles.back}
            >
              <Link to="/"> Back </Link>
            </button>
          </div>
        </div>
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
