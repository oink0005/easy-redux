import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <h2>Hello: {this.props.username}</h2>
    );
  }
}