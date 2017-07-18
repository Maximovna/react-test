import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class List extends React.Component {
  constructor(props) {
    super();
    this.doFilter = props.setFilter;
    this.deleteItem = props.setDeletion;
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          placeholder="Who are you looking for?"
          onChange={(e) => this.doFilter(e.target.value)}
        />
        <button className="add"><Link to="change"> New </Link></button>
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
                  onClick={() => this.deleteItem(this.props.contactList, list)}
                >
              Delete Contact
              </button>
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
