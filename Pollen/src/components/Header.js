import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.logo}>back</Text>
        <Text style={styles.logo}>pollen</Text>
        <Text style={styles.logo}>gear</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 44,
    backgroundColor: '#f8f9fe',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1
  },
  logo: {
    color: '#7d31e9',
    fontSize: 20,
  }
});

export default Header;
