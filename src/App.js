import React, { Component } from 'react';
// Import  connect to join map and compo.
import { connect } from 'react-redux';
// Import user component
import User from './User';
import './App.css';
class App extends Component {

  ChangeUser = () => {
    this.props.RESET(15000);
    if(this.props.user.name === 'Apinan') {
      this.props.SetName("Iam Apinan");
    } else {
      this.props.SetName("Apinan");
    }
  }
  

  render() {
    return (
      <div className="App">
        {/* Display child component with property username */}
        <div className="App-header">
          <User username = {this.props.user.name}/>
          <p>Current value: {this.props.emp.saraly}</p>
        </div>
        {/* Add action to update property */}
        <p>
          <button onClick={ this.ChangeUser }>Change name</button>
          {/* Add more saraly */}
          <button onClick={()=>this.props.ADD(1000)}>Add 1000</button>
        </p>
        <footer>
          <p>Created by <a href="https://www.youtube.com/channel/UCfBTtP6_vgluRow9iMi-sfg">Apinan Woratrakun</a></p>
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