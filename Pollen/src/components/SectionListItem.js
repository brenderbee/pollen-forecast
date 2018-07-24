import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import { StyleSheet, View, Text } from 'react-native';

export default class SectionListItem extends Component {
  render() {
    return (
      <View style={styles.listItemStyleWrapper}>
        <View style={styles.listItemStyle}>
          <View style={styles.listItemLeft}>
            <Text style={styles.listItemDate}>
              {this.props.item.date}
            </Text>
            <Text style={styles.listItemSymptom}>
              {this.props.item.symptoms}
            </Text>
          </View>
          <SvgUri width="16" height="16" source={require('./../../assets/img/pencil-alt.svg')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItemStyleWrapper: {
    paddingTop: 24,
    paddingBottom: 24
  },
  listItemStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 24
  },
  listItemLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  listItemDate: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  listItemSymptom: {
    fontSize: 12,
    marginLeft: 24
  }
});
