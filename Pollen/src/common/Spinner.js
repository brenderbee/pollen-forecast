import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { BallIndicator } from 'react-native-indicators';

function Spinner() {
  return (
    <View style={styles.spinnerStyle}>
      <BallIndicator color={'#7d31e9'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { Spinner };
