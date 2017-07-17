import React, { PropTypes } from 'react';

class List extends React.Component {
  componentDidMount() {
    this.props.setFilter(this.props.initData);
  }

  render() {
    return (
      <div>
        <input className="form-control" placeholder="Who are you looking for?" onChange={(e) => this.props.setFilter(this.props.initData, e.target.value)} />
        <ul className="init-list">
          {this.props.filteredData.map((data) => (
            <li key={data.id}><img src={data.image} alt="" />
              <p>Name: {data.name}.</p>
              <p>Phone Number: {data.number}</p>
              <button
                key={data.id} className="delete-item" onClick={() => this.props.setDeletion(this.props.initData, data)}
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
  setFilter: PropTypes.func,
  initData: PropTypes.array,
  filteredData: PropTypes.array,
  setDeletion: PropTypes.func,
};

export default List;
