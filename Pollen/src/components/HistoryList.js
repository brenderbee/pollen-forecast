import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HistoryList() {

  return (
    <View style={styles.historyListStyles}>
      <Text>HistoryList</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  historyListStyles: {
    borderWidth: 1,
    flexDirection: 'column',
    backgroundColor: 'blue'
  }
});
