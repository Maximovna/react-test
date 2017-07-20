import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../style.css';

class List extends React.Component {

  filterHadler = e => {
    this.props.setFilter(e.target.value);
  }

  deletionHandler = (list) => {
    this.props.setDeletion(this.props.contactList, list);
  }
  render() {
    return (
      <div className="list-container">
        <input
          className="form-control"
          placeholder="Who are you looking for?"
          onChange={this.filterHadler}
        />
        <button className={styles.add}><Link to="add"> Add new contact </Link></button>
        <ul className="list">
          {this.props.contactList
            .filter(list => list.name.indexOf(this.props.visibilityFilter) !== -1)
            .map((list) => (
              <li key={list.id}><img src={list.image} alt="" />
                <div className={styles.dataContainer}>
                  <p><span>Name: </span>{list.name}</p>
                  <p><span>Phone Number: </span>{list.number}</p>
                </div>
                <div className={styles.buttonWrapper}>
                  <button className={styles.edit}><Link to={`/change/${list.id}`}> Edit </Link></button>
                  <button
                    key={list.id}
                    className={styles.remove}
                    onClick={() => this.deletionHandler(list)}
                  >
              Delete contact
              </button>
                </div>
              </li>
          ))}
        </ul>

      </div>
    );
  }
}

List.propTypes = {
  contactList: PropTypes.array,
  visibilityFilter: PropTypes.string,
  setDeletion: PropTypes.func,
  setFilter: PropTypes.func,
};

export default List;
