import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

function Input({ placeholder, value, onChangeText, secureTextEntry }) {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    height: 50,
    fontSize: 16,
    width: '75%',
    padding: 16,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, .75)'
  }
});

export { Input };
