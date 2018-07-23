import React from 'react';
import { StyleSheet, View } from 'react-native';
import HistoryChart from './HistoryChart';
import HistoryList from './HistoryList';


export default function History() {

  return (
    <View style={styles.historyStyles}>
      <View style={styles.historyStylesChart}>
        <HistoryChart />
      </View>
      <View style={styles.historyStylesList}>
        <HistoryList />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  historyStyles: {
    flexDirection: 'column'
  },
  historyStylesChart: {

  },
  historyStylesList: {

  }
});
