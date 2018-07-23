import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function PollenProgressCircleSmall({ progress, src, name }) {
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
      <Image src={src} />
      <Text style={styles.pollenTitleStyle}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pollenTitleStyle: {
    textAlign: 'center',
    fontSize: 12
  },
  progressCircleStyles: {
    marginBottom: 20
  }
});

export { PollenProgressCircleSmall };
