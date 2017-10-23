import React, { Component } from 'react';



class Parent extends React.Component {
  render() {
    return <ChildComponent message="Hello World"/>;
  }
}

class ChildComponent extends React.Component {
  render() {
    return <p>And then I said, “{this.props.message}”</p>;
  }
}

export default Parent;
