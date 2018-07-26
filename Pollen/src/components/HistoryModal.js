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
      buttonWeed: '#aeaeae',
      buttonTree: '#aeaeae',
      buttonGrass: '#aeaeae',
      buttonMold: '#aeaeae',
    };
    this.onCompressPress = this.onCompressPress.bind(this);
    this.onButtonPressWeed = this.onButtonPressWeed.bind(this);
    this.onButtonPressTree = this.onButtonPressTree.bind(this);
    this.onButtonPressGrass = this.onButtonPressGrass.bind(this);
    this.onButtonPressMold = this.onButtonPressMold.bind(this);
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
    this.setState({
      buttonWeed: this.renderButtonColor(this.state.activeWeed),
    });
  }

  onButtonPressTree() {
    if (this.state.activeTree) {
      this.setState({ activeTree: false });
    } else {
      this.setState({ activeTree: true });
    }
    this.setState({
      buttonTree: this.renderButtonColor(this.state.activeTree)
    });
  }

  onButtonPressGrass() {
    if (this.state.activeGrass) {
      this.setState({ activeGrass: false });
    } else {
      this.setState({ activeGrass: true });
    }
    this.setState({
      buttonGrass: this.renderButtonColor(this.state.activeGrass)
    });
  }

  onButtonPressMold() {
    if (this.state.activeMold) {
      this.setState({ activeMold: false });
    } else {
      this.setState({ activeMold: true });
    }
    this.setState({
      buttonMold: this.renderButtonColor(this.state.activeMold)
    });
  }


  renderButtonColor(state) {
    const pink = '#f8596a';
    const grey = '#aeaeae';
    if (state) {
      return pink;
    }
    return grey;
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

          <View style={styles.buttonWrapper}>
            <AppButton
              onPress={this.onButtonPressTree}
              title='Tree'
              color='white'
              backgroundColor={this.state.buttonTree}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <AppButton
              onPress={this.onButtonPressGrass}
              title='Grass'
              color='white'
              backgroundColor={this.state.buttonGrass}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <AppButton
              onPress={this.onButtonPressMold}
              title='Mold'
              color='white'
              backgroundColor={this.state.buttonMold}
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
