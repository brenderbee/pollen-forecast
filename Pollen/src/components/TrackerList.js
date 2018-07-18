import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import PredictTracker from './PredictTracker';

export default class TrackerList extends Component {
  state = {

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>

        </View>
        <View style={styles.contentLeft}>
          <PredictTracker />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D3D4D6',
    borderRightWidth: 1,

  },
  contentLeft: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
