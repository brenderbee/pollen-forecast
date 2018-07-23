import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function PollenProgressCircleSmall({ progress, source, name }) {
  return (
    <View style={styles.progressCircleStyles}>
      <AnimatedCircularProgress
        rotation={0}
        backgroundWidth={2}
        size={75}
        width={8}
        fill={progress * 100}
        tintColor='#7d31e9'
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor='#D3D4D6'
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
    fontSize: 12
  },
  imageWrapper: {
    zIndex: 10,
    height: 75,
    width: 75,
    position: 'absolute'
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  }
});

export { PollenProgressCircleSmall };
