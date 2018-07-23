import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function PollenProgressCircleLarge({ progress, src, name }) {
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
      />
      <Image src={src} />
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
  }
});

export { PollenProgressCircleLarge };
