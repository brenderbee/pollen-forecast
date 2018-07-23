import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { PollenProgressCircleLarge, PollenProgressCircleSmall } from './../common';

export default class PollenSummary extends Component {
  state = {

  }

  render() {
    return (
      <View style={styles.wrapper}>

        <View style={styles.header}>
          <Text style={styles.location}>Portland, OR</Text>
          <Text style={styles.day}>Today</Text>
        </View>

        <View style={styles.mainPollenWrapper}>
          <PollenProgressCircleLarge
            progress={4/5}
            name='weed'
          />
        </View>

        <View style={styles.miniPollenWrapper}>

          <View style={styles.miniPollen}>
            <PollenProgressCircleSmall
              progress={2/5}
              name='tree'
            />
          </View>

          <View style={styles.miniPollen}>
            <PollenProgressCircleSmall
              progress={1/5}
              name='grass'
            />
          </View>

          <View style={styles.miniPollen}>
            <PollenProgressCircleSmall
              progress={0/5}
              name='mold'
            />
          </View>

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
