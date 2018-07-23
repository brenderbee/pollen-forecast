import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import PollenSummary from './PollenSummary';
import TrackerList from './TrackerList';


export default class Main extends Component {
  state = {

  }

  render() {
    return (
      <View style={styles.main}>
        <View  style={{ flex: 2}}>
          <PollenSummary />
        </View>
        <View style={{ flex: 1}}>
          <TrackerList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});
