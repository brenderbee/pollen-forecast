import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo';
import SvgUri from 'react-native-svg-uri';
import { Actions } from 'react-native-router-flux';
import HistoryChart from './HistoryChart';
import { AppButton } from './../common';

export default class HistoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWeed: false,
      activeTree: false,
      activeGrass: false,
      activeMold: false,
      buttonWeed: '#f8596a'
    };
    this.onCompressPress = this.onCompressPress.bind(this);
    this.onButtonPressWeed = this.onButtonPressWeed.bind(this);
    this.renderButtonColor = this.renderButtonColor.bind(this);
  }


  onCompressPress() {
    return (
      Actions.pop()
    );
  }

  onButtonPressWeed() {
    if (this.state.activeWeed) {
      this.setState({ activeWeed: false });
    } else {
      this.setState({ activeWeed: true });
    }
    this.setState({ buttonWeed: this.renderButtonColor(this.state.activeWeed) })
  }

  renderButtonColor(state) {
    const grey = '#f8596a';
    const pink = '#aeaeae';
    if (state) {
      return grey;
    }
    return pink;
  }

  render() {
    const pollens = ['Weed', 'Tree', 'Grass', 'Mold'];
    return (
      <LinearGradient
        colors={['rgba(120, 255, 214, 0.55)', 'rgba(168, 255, 120, 0.55)']}
        style={styles.gradient}
        >
        <View style={styles.modalWrapper}>
          <View style={styles.compressSVG}>
            <TouchableOpacity style={styles.compressSVGButton} onPress={this.onCompressPress}>
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
              onPress={this.onButtonPressWeed}
              title='Weed'
              color='white'
              backgroundColor={this.state.buttonWeed}
            />
          </View>



        </View>
      </LinearGradient>
    );
  }

}

const styles = StyleSheet.create({
  modalWrapper: {
    paddingTop: 44,
  },
  gradient: {
    flex: 1
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

// {
//   pollens.map((item, key)=>(
//     <View style={styles.buttonWrapper}>
//       <AppButton
//         onPress={() => this.onButtonPress(item)}
//         title={item}
//         color='white'
//         backgroundColor={this.renderButtonColor()}
//         key={key}
//       />
//     </View>
//   )
// )}
