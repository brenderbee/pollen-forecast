import React, { PureComponent } from 'react';
import { LineChart, YAxis, Grid, XAxis } from 'react-native-svg-charts';
import { View, Text, StyleSheet } from 'react-native';

export default class HistoryChart extends PureComponent {

  render() {
    const data = [5, 2, 3, 3, 4, 4, null];
    const dataX = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];

    const contentInset = { top: 20, bottom: 20 };

    return (
      <View style={styles.historyChart}>
        <View style={styles.historyHeader}>
          <Text style={styles.historyHeaderText}>History</Text>
        </View>
        <View style={styles.chartWrapper}>
          <YAxis
            data={data}
            contentInset={contentInset}
            svg={{
              fill: 'rgba(115, 63, 224, 0.5)',
              fontSize: 10,
            }}
            formatLabel={(value) => `${value}`}
            min={0}
          />
          <LineChart
            numberOfTicks={5}
            gridMin={0}
            style={{ flex: 1, marginLeft: 20, marginRight: 20 }}
            data={data}
            svg={{ stroke: '#7d31e9', strokeWidth: 4, strokeLinecap: 'round' }}
            contentInset={contentInset}
          >
            <Grid />
          </LineChart>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  historyChart: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column'
  },
  historyHeader: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  historyHeaderText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  chartWrapper: {
    height: '85%',
    flexDirection: 'row'
  }
});
