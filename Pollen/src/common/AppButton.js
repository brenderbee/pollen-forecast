import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function AppButton({ title, color, backgroundColor, onPress }) {
  const styles = StyleSheet.create({
    buttonWrapper: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      height: 55,
      backgroundColor: `${backgroundColor}`
    },
    opacityStyle: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonTitle: {
      color: `${color}`,
      fontSize: 16
    }
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.opacityStyle}>
      <View style={styles.buttonWrapper}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export { AppButton };
