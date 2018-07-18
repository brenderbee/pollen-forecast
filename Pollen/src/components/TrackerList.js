import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class TrackerList extends Component {
  state = {

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>This is the TrackerList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1
  }
});
