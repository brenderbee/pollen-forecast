import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import PollenSummary from './PollenSummary';
import TrackerList from './TrackerList';
import PollenProgressCircle from './PollenProgressCircle';


export default class Main extends Component {
  state = {

  }

  render() {
    return (
      <View style={styles.main}>
        <PollenProgressCircle />
        <PollenSummary />
        <TrackerList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    marginTop: 0
  }
});
