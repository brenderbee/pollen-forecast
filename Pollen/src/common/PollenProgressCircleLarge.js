import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function PollenProgressCircleLarge({ progress, source, name }) {
  return (
    <View style={styles.progressCircleStyles}>
      <AnimatedCircularProgress
        rotation={0}
        backgroundWidth={2}
        size={125}
        width={8}
        fill={progress * 100}
        tintColor='#7d31e9'
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor='#D3D4D6'
        duration={1000}
        lineCap='round'
      />
    <View style={styles.imageWrapper}>
      <Image source={source} style={styles.imageStyle} />
    </View>
      <Text style={styles.pollenTitleStyle}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  progressCircleStyles: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  pollenTitleStyle: {
    textAlign: 'center',
    fontSize: 16
  },
  imageWrapper: {
    zIndex: 5,
    height: 125,
    width: 125,
    position: 'absolute'
  },
  imageStyle: {
    height: 75,
    width: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  }
});

export { PollenProgressCircleLarge };
