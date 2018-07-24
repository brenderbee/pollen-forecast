import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Test extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text>header</Text>
        </View>
        <View style={styles.main}>
          <Text>main</Text>
        </View>
        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'blue',
    flex: 70
  },
  main: {
    backgroundColor: 'red',
    flex: 550
  },
  footer: {
    backgroundColor: 'green',
    flex: 80
  }
});
