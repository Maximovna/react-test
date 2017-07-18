// import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
// import Dropzone from 'react-dropzone';
//
// class Form extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { id: '', image: '', name: '', number: '' };
//   // }
//   // handleChange() {
//   //   this.setState({ id: Date.now(), image: 'http://via.placeholder.com/150x150/', name: this.state.name, number: this.state.number });
//   // }
//   render() {
//     return (
//       <div>
//         <Dropzone
//           accept="image/*"
//           multiple={false}
//           onDrop={this.onDrop}
//         >
//           <p>Upload The Photo</p>
//         </Dropzone>
//         Your new contact will be called: <input
//           type="text"
//           className="name"
//           placeholder="Enter the new name"
//           value={this.state.name}
//           onChange={this.handleChange}
//         />
//         And its phone number will be: <input
//           type="number"
//           className="phone-number"
//           placeholder="Enter the new phone number"
//           value={this.state.number}
//           onChange={this.state.handleChange}
//         />
//         <button
//           className="add"
//           type="submit"
//           onClick={console.log(this.state.name)}
//         >
//         Add
//         </button>
//         <Link to="/"> back </Link>
//       </div>
//     );
//   }
// }
//
// Form.propTypes = {
//   setNew: PropTypes.func,
//   initData: PropTypes.array,
// };
//
// export default Form;
