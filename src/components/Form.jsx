import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../style.css';

class Form extends React.Component {
  constructor(props) {
    super();
    this.elem = props.elem;
    if (props.routeParams.id) {
      const newElem = props.contactList
                .filter(value => (value.id === +props.routeParams.id));
      this.elem = newElem[0];
    }
  }

  handleSubmit() {
    const newArray = this.props.contactList;
    newArray.push(this.elem);
    this.props.setNew(newArray);
  }
  handleChange() {
    const changedArray = this.props.contactList;
    changedArray.splice(this.props.routeParams.id, 1, this.elem);
    this.props.setChanges(changedArray);
  }
  render() {
    return (
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <p>Put a photo url</p>
          <input
            type="text"
            id="hidden"
            className={styles.picture}
            name="img"
            placeholder="ye, put it right here"
            onChange={(e) => { this.elem.image = e.target.value; }}
          />
          <div className={styles.name}>
            <p>Your new contact will be called:</p> <input
              type="text"
              className={styles.enterName}
              placeholder={this.elem.name}
              onChange={(e) => { this.elem.name = e.target.value; }}
            />
          </div>
          <p>And its phone number will be:</p> <input
            type="text"
            className={styles.enterNumber}
            placeholder={this.elem.number}
            onChange={(e) => this.elem.number = e.target.value}
          />
          <div>
            <Link
              className={styles.submit}
              onClick={() => {
                (this.props.routeParams.id) ? this.handleChange() : this.handleSubmit();
              }}
              to="/"
            >
          Submit
        </Link>
            <Link
              className={styles.back}
              to="/"
            > Back </Link>
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
