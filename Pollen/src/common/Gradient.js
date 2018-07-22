import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

function Gradient() {
  return (
    <LinearGradient
      colors={['rgba(120, 255, 214, 0.55)', 'rgba(168, 255, 120, 0.55)']}
      style={styles.gradientStyles}
    />
  );
}

const styles = StyleSheet.create({
  gradientStyles: {
    flex: 1
  }
});

export { Gradient };
