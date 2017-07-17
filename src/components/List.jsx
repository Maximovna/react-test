import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {filters} from '../actions';
import {deleteItem} from '../actions';
import SetList from '../containers/SetList';
import {initialState} from '../reducers';
import {contactList} from '../reducers';

class List extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    this.props.setFilter(this.props.initData, '')
  }

  render() {
    debugger
    return (
      <div>
        <input className="form-control" placeholder="Who are you looking for?" onChange={(e) => this.props.setFilter(this.props.initData, e.target.value)}/>
        <ul className='init-list'>
          {this.props.filteredData.map((data, id) => {
            return (
              <li key={data.id}><img src={data.image}/>
                <p>Name: {data.name}.</p>
                <p>Phone Number: {data.number}</p>
                <button key={data.id} className="delete-item" onClick={() => this.props.setDeletion(this.props.initData)}>
                  Delete Contact
                </button>
              </li>

            )
          })}
        </ul>

      </div>
    )
  }
}
export default List
