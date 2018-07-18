import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class PredictTracker extends Component {
  state = {

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Predict Pollens</Text>
        <Image source={require('./../../assets/img/crystal-ball.png')} style={{height: 51, width: 45}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16
  }
});
