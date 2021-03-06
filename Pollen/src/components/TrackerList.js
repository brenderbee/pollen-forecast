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
          <Text>tracker</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 80
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
