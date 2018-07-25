import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import SvgUri from 'react-native-svg-uri';
import HistoryChart from './HistoryChart';
import HistoryList from './HistoryList';
import HistoryModal from './HistoryModal';

export default function History() {

  onExpandPress = () => {
    return (
      console.log('expand pressed')
    );
  }

  return (

    <View>
      <LinearGradient
        colors={['rgba(120, 255, 214, 0.55)', 'rgba(168, 255, 120, 0.55)']}
        style={styles.gradient}
      >
        <View style={styles.expandSVG}>
          <TouchableOpacity style={styles.expandSVGButton} onPress={onExpandPress}>
            <SvgUri
              width="16"
              height="16"
              source={require('./../../assets/img/expand-arrows-alt.svg')}
              />
        </TouchableOpacity>
        </View>
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
  expandSVG: {
    alignItems: 'flex-end'
  },
  expandSVGButton: {
    paddingRight: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  historyLabelStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '100',
    marginTop: 6,
    marginBottom: 20
  },
  gradient: {
    height: '30%'
  },
  historyStylesChart: {
    height: '70%'
  },
  historyStylesList: {
    height: '70%'
  }
});



// <View>
//   <HistoryModal />
// </View>
