import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import PropTypes from 'prop-types'

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default Greeting;
