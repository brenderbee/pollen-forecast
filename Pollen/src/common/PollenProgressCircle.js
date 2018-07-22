import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

function PollenProgressCircle({ height, progress, imageURL }) {

  return (
    <ProgressCircle
      style={{ height: 125 }}
      progress={ 4/5 }
      progressColor={'#7d31e9'}
      strokeWidth={8}
      backgroundColor={'none'}
    />
  );
}

const styles = StyleSheet.create({
  progressCircleStyle: {
    zIndex: 100
  }
});

export { PollenProgressCircle };
