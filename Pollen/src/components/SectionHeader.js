import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SectionHeader extends Component {
  render() {
    return (
      <View style={styles.sectionHeaderStyleWrapper}>
        <Text style={styles.sectionHeaderStyle}>{this.props.section.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeaderStyleWrapper: {
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#7d31e9'
  },
  sectionHeaderStyle: {
    color: '#fff',
    paddingLeft: 16,
    fontSize: 16
  }
});
