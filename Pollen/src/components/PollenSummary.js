import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { PollenProgressCircleLarge, PollenProgressCircleSmall } from './../common';

export default class PollenSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getPollenItem = this.getPollenItem.bind(this);
  }

  getPollenItem = () => {
    Alert.alert('temp');
  }

  render() {
        const { checked } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.location}>Portland, OR</Text>
          <Text style={styles.day}>Today</Text>
        </View>

        <TouchableOpacity onPress={this.getPollenItem}>
          <View style={styles.mainPollenWrapper}>
            <PollenProgressCircleLarge
              progress={4 / 5}
              name='weed'
              source={require('./../../assets/img/weed.png')}
              />
          </View>
        </TouchableOpacity>

        <View style={styles.miniPollenWrapper}>
          <TouchableOpacity onPress={this.getPollenItem}>
            <View style={styles.miniPollen}>
              <PollenProgressCircleSmall
                progress={2 / 5}
                name='tree'
                source={require('./../../assets/img/tree.png')}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getPollenItem}>
            <View style={styles.miniPollen}>
              <PollenProgressCircleSmall
                progress={1 / 5}
                name='grass'
                source={require('./../../assets/img/grass.png')}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.getPollenItem}>
            <View style={styles.miniPollen}>
              <PollenProgressCircleSmall
                progress={0 / 5}
                name='mold'
                source={require('./../../assets/img/mold.png')}
              />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderColor: '#D3D4D6',
    height: '75%',
    justifyContent: 'space-between',
    borderWidth: 1,
    flex: 1
  },
  mainPollenWrapper: {

  },
  mainPollen: {
    height: 125,
    width: 125,
    borderColor: '#D3D4D6',
    borderRadius: 125,
    borderWidth: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  miniPollenWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  miniPollen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  location: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  day: {
    textAlign: 'center',
    fontSize: 16
  }
});
