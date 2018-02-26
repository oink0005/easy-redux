import React, { Component } from 'react';
// Import  connect to join map and compo.
import { connect } from 'react-redux';
// Import user component
import User from './User';
import './App.css';
class App extends Component {
  constructor (props) {
    super(props);
  }

  ChangeUser = () => {
    this.props.RESET(15000);
    if(this.props.user.name === 'React') {
      this.props.SetName("REDUX");
    } else {
      this.props.SetName("React");
    }
  }
  

  render() {
    return (
      <div className="App">
        {/* Display child component with property username */}
        <div className="App-header">
          <User username = {this.props.user.name}/>
          <p>เงินเดือน: {this.props.emp.saraly}</p>
        </div>
        {/* Add action to update property */}
        <p>
          <button onClick={ this.ChangeUser }>เปลี่ยนชื่อ</button>
          {/* Add more saraly */}
          <button onClick={()=>this.props.ADD(1000)}>เพิ่มเงินเดือนให้ 1000</button>
        </p>
        <footer>
          &copy; Created by Apinan Woratrakun
          <p>Repository at: <a href="https://bitbucket.org/iotechdev/easy-redux">https://bitbucket.org/iotechdev/easy-redux</a></p>
        </footer>
      </div>
    );
  }
}

// Map state to property
const mapStatetoProps = (state) => {
    return {
      user: state.user,
      emp: state.emp
    }
}
// Map Dispatch function to property
const mapDispatchtoProps = (dispatch) => {
  return {
    // Return as a function name SetName and Dispatch by send name paylaod to action SetName
    SetName: (name) => {
      dispatch({
        type: "SetName",
        payload: name
      });
    },
    ADD: (saraly) => {
      dispatch({
        type: "ADD",
        payload: saraly
      })
    },
    RESET: (value) => {
      dispatch({
        type: "RESET",
        payload: value
      })
    }
  };
}

// Link map function to component
export default connect(mapStatetoProps, mapDispatchtoProps)(App);