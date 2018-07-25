import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import SvgUri from 'react-native-svg-uri';
import HistoryChart from './HistoryChart';
import { AppButton } from './../common';

export default function HistoryModal() {

  onCompressPress = () => {
    return (
      console.log('compress pressed')
    );
  }

  return (
    <LinearGradient
      colors={['rgba(120, 255, 214, 0.55)', 'rgba(168, 255, 120, 0.55)']}
      style={styles.gradient}
    >
      <View style={styles.modalWrapper}>
          <View style={styles.compressSVG}>
            <TouchableOpacity style={styles.compressSVGButton} onPress={onCompressPress}>
              <SvgUri
                width="16"
                height="16"
                source={require('./../../assets/img/compress.svg')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.historyStylesChart}>
            <HistoryChart />
          </View>
        <Text style={styles.historyLabelStyle}>symptoms over time</Text>
      </View>
      <View style={styles.mainButtonWrapper}>
        <View style={styles.buttonWrapper}>
          <AppButton
            onPress={this.onButtonPress}
            title='Weed'
            color='white'
            backgroundColor='#f8596a'
          />
        </View>
        <View style={styles.buttonWrapper}>
          <AppButton
            onPress={this.onButtonPress}
            title='Tree'
            color='white'
            backgroundColor='#aeaeae'
          />
        </View>
        <View style={styles.buttonWrapper}>
          <AppButton
            onPress={this.onButtonPress}
            title='Grass'
            color='white'
            backgroundColor='#aeaeae'
          />
        </View>
        <View style={styles.buttonWrapper}>
          <AppButton
            onPress={this.onButtonPress}
            title='Mold'
            color='white'
            backgroundColor='#aeaeae'
          />
        </View>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {

  },
  compressSVG: {
    alignItems: 'flex-end'
  },
  compressSVGButton: {
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
  historyStylesChart: {
    height: '70%'
  },
  mainButtonWrapper: {
    marginLeft: 36,
    marginRight: 36,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  buttonWrapper: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
