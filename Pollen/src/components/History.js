import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';
import HistoryChart from './HistoryChart';
import HistoryList from './HistoryList';


export default function History() {
  return (
    <View style={styles.historyStyle}>
      <LinearGradient
        colors={['rgba(120, 255, 214, 0.55)', 'rgba(168, 255, 120, 0.55)']}
        style={styles.gradient}
      >
        <View style={styles.historyStylesChart}>
          <HistoryChart />
        </View>
      </LinearGradient>
      <Text style={styles.historyLabelStyle}>symptoms over time</Text>
      <View style={styles.historyStylesList}>
        <HistoryList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  historyStyle: {
    
  },
  historyLabelStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '100',
    marginTop: 6,
    marginBottom: 20
  },
  historyStylesChart: {
    height: '30%'
  },
  historyStylesList: {
    height: '70%'
  }
});
