import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class List extends React.Component {

  filterHadler = e => {
    this.props.setFilter(e.target.value);
  }

  deletionHandler = (list) => {
    this.props.setDeletion(this.props.contactList, list);
  }
  render() {
    return (
      <div>
        <input
          className="form-control"
          placeholder="Who are you looking for?"
          onChange={this.filterHadler}
        />
        <button className="add"><Link to="add"> New </Link></button>
        <ul className="list">
          {this.props.contactList
            .filter(list => list.name.indexOf(this.props.visibilityFilter) !== -1)
            .map((list) => (
              <li key={list.id}><img src={list.image} alt="" />
                <p>Name: {list.name}.</p>
                <p>Phone Number: {list.number}</p>
                <button
                  key={list.id}
                  className="delete-item"
                  onClick={() => this.deletionHandler(list)}
                >
              Delete Contact
              </button>
                <button className="edit"><Link to={`/change/${list.id}`}> Edit </Link></button>
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
