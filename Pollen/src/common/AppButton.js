import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';

function AppButton({ title, color, backgroundColor, onPress }) {
  const styles = StyleSheet.create({
    buttonWrapper: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      height: 55,
      backgroundColor: `${backgroundColor}`
    }
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={onPress}
          title={title}
          color={color}
          accessibilityLabel="Learn more about this button"
        />
      </View>
    </TouchableOpacity>
  );
}


export { AppButton };
